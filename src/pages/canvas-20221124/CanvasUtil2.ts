import {BaseShape} from "./shapes/BaseShape"
import EventBus from "../../lib/designer/event/eventBus"
import {clear} from "./utils"
import {BaseEvent2, EventMapTypes, EventTypes, P, ShapeConfig, ShapeType} from "./type"
import {cloneDeep, throttle} from "lodash"
import {config} from "./constant"
import {Shape} from "./utils/Shape"
import {mat4} from "gl-matrix"
import {getShapeFromConfig} from "./shapes/common"

const out: any = new Float32Array([
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
])
export default class CanvasUtil2 {
  static instance: CanvasUtil2

  static getInstance(canvas?: HTMLCanvasElement) {
    if (canvas) {
      if (this.instance) {
        this.instance.init(canvas)
      } else {
        this.instance = new CanvasUtil2(canvas)
      }
    }
    return this.instance
  }

  // @ts-ignore
  private canvas: HTMLCanvasElement
  // @ts-ignore
  public ctx: CanvasRenderingContext2D
  // @ts-ignore
  private canvasRect: DOMRect
  private dpr: number = 0
  private children: BaseShape[] = []
  private currentMat: any = new Float32Array(config.currentMat)
  handScale: number = config.handScale
  handMove: P = config.handMove
  //当hover时，只向hover那个图形传递事件。不用递归整个树去判断isIn
  inShape: any
  //因为当hover只向hover图形传递事件，所以无法获得父级链，这里用个变量保存起来
  //当hover时，传递这个就可以正确获得父级链
  inShapeParent: any
  //选中图形
  selectedShape: any
  //选中图形的父级链，选中新的图形时，需要把老的父级链的isCapture全部设为ture,
  //原因：选中新图形后，hover老图形时依然能hover中，所以需要把老的低级链isCapture全部设为ture
  //屏蔽事件向下传递
  selectedShapeParent: any = []
  editShape: any
  //用于标记子组件是否选中
  childIsIn: boolean = false
  mode: ShapeType = ShapeType.SELECT
  startX: number = -1
  startY: number = -1
  offsetX: number = -1
  offsetY: number = -1
  isMouseDown: boolean = false
  drawShapeConfig: any = null
  cursor: string = 'default'
  _data: any = {}
  private renderTime: any = undefined


  constructor(canvas: HTMLCanvasElement) {
    this.init(canvas)
  }

  init(canvas: HTMLCanvasElement) {
    this.children = []
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    let canvasRect = canvas.getBoundingClientRect()
    let {width, height} = canvasRect
    let dpr = window.devicePixelRatio
    if (dpr) {
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      canvas.height = height * dpr
      canvas.width = width * dpr
      ctx.scale(dpr, dpr)
    }
    this.canvas = canvas
    this.ctx = ctx
    this.dpr = dpr
    this.canvasRect = canvasRect
    this.initEvent(true)
    this.initEvent()
  }

  addChildren(rects: any) {
    cloneDeep(rects).map((conf: ShapeConfig) => {
      let r = getShapeFromConfig(conf)
      r && this.children.push(r)
    })
  }

  isDesign() {
    return true
  }

  //设置inShape
  setInShape(shape: BaseShape, parent?: BaseShape[]) {
    if (this.inShapeParent !== parent) {
      this.inShapeParent = parent
    }
    if (this.inShape !== shape) {
      // console.log('shape', shape?.config?.name)
      if (this.inShape) {
        this.inShape.isHover = false
      }
      this.inShape = shape
      this.render()
    }
  }

  //设置inShape为null
  setInShapeNull(target: BaseShape) {
    if (this.inShape === target) {
      this.inShape = null
      this.render()
    }
  }

  /**
   * @desc 下一次有空再渲染,0.3秒延迟，避免每加载完成一个文件就渲染一次
   * */
  nextRender() {
    clearTimeout(this.renderTime)
    this.renderTime = setTimeout(() => {
      this.render()
    }, 300)
  }

  render() {
    EventBus.emit(EventTypes.onDraw)
    // if (true){
    if (false) {
      this.currentMat = new Float32Array([
        1.25, 0, 0, 0,
        0, 1.25, 0, 0,
        0, 0, 1, 0,
        -96.75, -87, 0, 1,
      ])
      this.handScale = this.currentMat[0]
      this.handMove = {
        x: this.currentMat[12],
        y: this.currentMat[13],
      }
    }
    // console.log('重绘所有图形')
    clear({x: 0, y: 0, w: this.canvas.width, h: this.canvas.height}, this.ctx)
    this.ctx.save()
    if (this.currentMat) {
      // console.log('平移：', currentMat[12], currentMat[13])
      // console.log('缩放：', currentMat[0], currentMat[5])
      let nv = this.currentMat
      this.ctx.transform(nv[0], nv[4], nv[1], nv[5], nv[12], nv[13])
      // ctx.translate(currentMat[12], currentMat[13])
      // ctx.scale(currentMat[0], currentMat[5])
    }
    this.ctx.lineCap = 'round'
    // console.log('this.children,', this.children)
    //不能用map或者forEach，因为里面await 不生效
    for (let i = 0; i < this.children.length; i++) {
      let shape = this.children[i]
      shape.shapeRender(this.ctx)
    }
    this.ctx.restore()
  }

  initEvent(isClear: boolean = false) {
    const fn = isClear ? 'removeEventListener' : 'addEventListener'
    Object.values([
      // EventTypes.onDoubleClick,
      EventTypes.onMouseMove,
      EventTypes.onMouseDown,
      EventTypes.onMouseUp,
      // EventTypes.onMouseEnter,
      // EventTypes.onMouseLeave,
    ]).forEach(eventName => {
      //忘记为啥与true了
      this.canvas[fn](eventName, this.handleEvent, true)
    })
    this.canvas[fn](EventTypes.onWheel, this.onWheel)
    this.canvas[fn](EventTypes.onDbClick, this.handleEvent)
  }

  //TODO　这里过滤会导致mouseup丢失
  handleEvent = throttle(e => this._handleEvent(e), 0)

  _handleEvent = async (e: any) => {
    let x = e.x - this.canvasRect.left
    let y = e.y - this.canvasRect.top
    let event: BaseEvent2 = {
      capture: false,
      e,
      point: {x, y},
      type: e.type,
      stopPropagation() {
        this.capture = true
      },
      cancelStopPropagation() {
        this.capture = false
      }
    }
    if (this.editShape) {
      this.editShape.event(event, [])
    } else {
      if (this.inShape) {
        this.inShape.event(event, this.inShapeParent)
      } else {
        for (let i = 0; i < this.children.length; i++) {
          let shape = this.children[i]
          let isBreak = await shape.event(event, [])
          if (isBreak) break
        }
      }
    }

    if (event.type === EventTypes.onMouseMove) {
      this.onMouseMove(event, {x, y})
    }
    if (event.type === EventTypes.onMouseDown) {
      this.onMouseDown(event, {x, y})
    }
    if (event.type === EventTypes.onMouseUp) {
      this.onMouseUp(event, {x, y})
    }
    if (event.type === EventTypes.onDbClick) {
      this.onDbClick(event)
    }
  }

  onDbClick(e: any) {
    if (e.capture) return
    console.log('cu-onDbClick', e)
    if (this.editShape) {
      this.editShape.isEdit = false
      this.editShape.isSelect = true
      this.editShape = null
      this.render()
    }
  }

  onMouseDown(e: BaseEvent2, p: P,) {
    if (e.capture) return
    if (this.editShape) return
    console.log('cu-onMouseDown', e)
    this.selectedShapeParent.map((shape: Shape) => shape.isCapture = true)
    if (this.selectedShape) {
      this.selectedShape.isEdit = this.selectedShape.isSelect = false
      this.render()
    }
  }

  onMouseMove(e: BaseEvent2, p: P,) {
    if (e.capture) return
    // console.log('cu-onMouseMove', e)
  }

  onMouseUp(e: BaseEvent2, p: P,) {
    if (e.capture) return
    console.log('cu-onMouseUp', e)
  }

  onWheel = (e: any) => {
    // console.log('e', e)
    let {clientX, clientY, deltaY} = e

    let x = clientX - this.canvasRect.left
    let y = clientY - this.canvasRect.top

    const zoom = 1 + (deltaY < 0 ? 0.25 : -0.25)
    //因为transform是连续变换，每次都是放大0.1倍，所以要让x和y变成0.1倍。这样缩放和平移是对等的
    //QA：其实要平移的值，也可以直接用x，y剩以当前的总倍数，比如放在1.7倍，那么x*0.7，就是要平移的x坐标
    //但是下次再缩放时，要加或减去上次平移的xy坐标
    x = x * (1 - zoom)
    y = y * (1 - zoom)
    const transform = new Float32Array([
      zoom, 0, 0, 0,
      0, zoom, 0, 0,
      0, 0, 1, 0,
      x, y, 0, 1,
    ])
    const newCurrentMat = mat4.multiply(out, transform, this.currentMat)
    this.currentMat = newCurrentMat
    this.handMove = {
      x: newCurrentMat[12],
      y: newCurrentMat[13],
    }
    this.handScale = newCurrentMat[0]
    // console.log('this.handMove', this.handMove)
    // console.log('this.handScale', this.handScale)
    // console.log('this.currentMat', this.currentMat)
    EventBus.emit(EventTypes.onWheel, this.handScale)
    this.render()
  }

  clear() {
    this.handScale = config.handScale
    this.handMove = config.handMove
    this.currentMat = new Float32Array(config.currentMat)
    this.children = []
  }

  print(list: any) {
    return list.map((item: any) => {
      if (item.children) {
        item.children = this.print(item.children)
      }
      return item.config
    })
  }

  print2() {
    return this.print(cloneDeep(this.children))
  }

  setMode(val: any) {
  }
}

