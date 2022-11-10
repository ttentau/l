import {getPath} from "./pages/canvas/utils";
import {Shape, ShapeConfig} from "./pages/canvas/type";
import {CanvasUtil} from "./pages/canvas/utils/CanvasUtil";

export abstract class P {
  hoverRd1: boolean = false
  enterRd1: boolean = false
  hoverL: boolean = false
  enterL: boolean = false
  hoverLT: boolean = false
  enterLT: boolean = false
  hoverLTR: boolean = false
  enterLTR: boolean = false
  config: ShapeConfig
  protected children: Shape[] = []
  isHover: boolean = false
  isSelect: boolean = false
  isEdit: boolean = false
  isCapture: boolean = true
  enter: boolean = false
  startX: number = 0
  startY: number = 0
  original: any = null
  lastClickTime: number = 0

  constructor(props: any) {
    this.config = getPath(props)
  }

  abstract render(): void

  abstract isIn(): void

  abstract mousedown(): void

  abstract mouseup(): void

  abstract mousemove(): void

  event() {

  }

  emit(event: any, p: any) {
    let {e, coordinate, type} = event
    // @ts-ignore
    this[type]?.(event, p)
  }

  //获取缩放平移之后的x和y值
  getXY(coordinate: { x: number, y: number }) {
    let {x, y} = coordinate
    let cu = CanvasUtil.getInstance();
    const {x: handX, y: handY} = cu.handMove
    x = (x - handX) / cu.handScale//上面的简写
    y = (y - handY) / cu.handScale
    return {x, y, cu}
  }
}

export class C extends P {
  constructor(props: any) {
    super(props);
  }

  isIn(): void {
  }

  mousedown(): void {
  }

  mousemove(): void {
  }

  mouseup(): void {
  }

  render(): void {
  }

}