import {BaseShape} from "./BaseShape"
import CanvasUtil2 from "../CanvasUtil2"
import {BaseEvent2, BezierPoint, BezierPointType, getP2, LineType, P, P2, ShapeStatus, ShapeType} from "../utils/type"
import {jiaodu2hudu} from "../../../utils"
import {Colors} from "../utils/constant"
import {BaseConfig} from "../config/BaseConfig"
import draw from "../utils/draw"

export class Rectangle extends BaseShape {

  constructor(props: any) {
    super(props)
    // if (props.id === 'e378e9bc-080a-46ab-b184-ce86647aca9e') {
    if (false) {
      let event: BaseEvent2 = {
        capture: false,
        e: {} as any,
        point: {x: 0, y: 0},
        screenPoint: {x: 0, y: 0},
        canvasPoint: {x: 0, y: 0},
        type: '',
        stopPropagation() {
          this.capture = true
        },
        cancelStopPropagation() {
          this.capture = false
        }
      }
      this.dblclick(event)
    }
  }

  get _config(): any {
    return this.conf as any
  }

  set _config(val) {
    this.conf = val
  }

  childDbClick(event: BaseEvent2, parents: BaseShape[]): boolean {
    return false
  }

  hoverPointIndex: number = -1

  childMouseDown(event: BaseEvent2, parents: BaseShape[]) {
    // console.log('childMouseDown', this.hoverPointIndex)
    if (this.status === ShapeStatus.Edit) {
      this._config.isCustom = true
      this.enter = true
      return true
    }
    return false
  }

  childMouseMove(event: BaseEvent2, parents: BaseShape[]) {
    // console.log('childMouseMove', this.hoverPointIndex)
    if (this.status === ShapeStatus.Edit) {
      if (this.hoverPointIndex < 0 || !this.enter) return false
      let {x, y,} = event.point
      let cu = CanvasUtil2.getInstance()
      // let {x, y, w, h, points} = this._config
      // mousePoint.x = mousePoint.x - x - w / 2
      // mousePoint.y = mousePoint.y - y - h / 2
      this._config.points[this.hoverPointIndex].center = {x, y}
      cu.render()
      return true
    }
    return false
  }

  childMouseUp(event: BaseEvent2, parents: BaseShape[]) {
    // console.log('childMouseUp', this.hoverPointIndex)

    return false
  }

  beforeShapeIsIn() {
    return false
  }

  isInOnSelect(mousePoint: P, cu: CanvasUtil2): boolean {
    return false
  }

  isHoverIn(mousePoint: P, cu: CanvasUtil2): boolean {
    if (this.status === ShapeStatus.Edit) {
      let {x, y, w, h, points} = this._config
      this.hoverPointIndex = -1
      mousePoint.x = mousePoint.x - x - w / 2
      mousePoint.y = mousePoint.y - y - h / 2
      for (let i = 0; i < points.length; i++) {
        let p = points[i]
        if (super.isInPoint(mousePoint, p.center, 4)) {
          document.body.style.cursor = "pointer"
          this.hoverPointIndex = i
          return true
        }
      }
      document.body.style.cursor = "default"
    }
    return super.isInBox(mousePoint)
  }

  //TODO 可以用roundRect方法
  drawShape(ctx: CanvasRenderingContext2D, p: P, parent?: BaseConfig) {
    let {
      w, h, radius,
      fillColor, borderColor, rotate, lineWidth,
      type, flipVertical, flipHorizontal, children,
      fontWeight, fontSize, fontFamily
    } = this._config
    const {x, y} = p
    ctx.save()
    if (radius) {
      draw.roundRect( ctx,{x, y, w, h}, radius,)
    } else {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + w, y)
      ctx.lineTo(x + w, y + h)
      ctx.lineTo(x, y + h)
      ctx.lineTo(x, y)
      ctx.closePath()
      ctx.font = `400 18rem "SourceHanSansCN", sans-serif`
      let text = `${w.toFixed(2)} x ${h.toFixed(2)}`
      let m = ctx.measureText(text)
      let lX = x + w / 2 - m.width / 2
      ctx.fillText(text, lX, y + h + 26)
      ctx.fillStyle = fillColor
      ctx.fill()
      ctx.strokeStyle = borderColor
      ctx.stroke()
    }
    ctx.restore()
  }

  drawHover(ctx: CanvasRenderingContext2D, xy: P, parent?: BaseConfig): void {
  }

  drawSelected(ctx: CanvasRenderingContext2D, xy: P, parent?: BaseConfig): void {
  }

  drawSelectedHover(ctx: CanvasRenderingContext2D, conf: any): void {
    let {
      x, y, w, h, radius,
      fillColor, borderColor, rotate,
      type, flipVertical, flipHorizontal, children,
    } = conf
    ctx.strokeStyle = 'rgb(139,80,255)'

    let d = 4
    let radius2 = 200
    let min = Math.min(w, h)
    // debugger
    let maxRadius = min / 2
    // let hypotenuse = Math.sqrt(Math.pow(maxRadius, 2) + Math.pow(maxRadius, 2))
    let hypotenuse = Math.hypot(maxRadius, maxRadius)

    let radiusHyp = hypotenuse / maxRadius * radius2
    let cos = Math.cos(jiaodu2hudu(45))
    let hey = cos * radiusHyp
    // console.log(hey)


    d = 20
    d = radius
    let r2 = 5
    let t = conf
    let endTop = {
      x: t.x + Math.min(t.w, t.h) / 2,
      y: t.y + Math.min(t.w, t.h) / 2,
    }
    let endBottom = {
      x: t.x + Math.min(t.w, t.h) / 2,
      y: t.y + t.h - Math.min(t.w, t.h) / 2,
    }
    let topLeft = {
      x: t.x + d,
      y: t.y + d,
    }
    let topRight = {
      x: t.x + t.w - d,
      y: t.y + d,
    }
    let bottomLeft = {
      x: t.x + d,
      y: t.y + t.h - d,
    }
    let bottomRight = {
      x: t.x + t.w - d,
      y: t.y + t.h - d,
    }
    ctx.save()
    // let nv = currentMat
    // ctx.transform(nv[0], nv[4], nv[1], nv[5], nv[12], nv[13]);
    // draw.renderRound(endTop, r, ctx, ShapeType.SELECT)
    // draw.renderRound(endBottom, r, ctx, ShapeType.SELECT)

    draw.round(topLeft, r2, ctx, ShapeType.SELECT)
    draw.round(topRight, r2, ctx, ShapeType.SELECT)
    draw.round(bottomLeft, r2, ctx, ShapeType.SELECT)
    draw.round(bottomRight, r2, ctx, ShapeType.SELECT)
    ctx.restore()
  }

  drawEdit(ctx: CanvasRenderingContext2D, conf: any): void {
    let {
      x, y, w, h, radius,
      fillColor, borderColor, rotate,
      type, flipVertical, flipHorizontal, children, points,
      isCustom
    } = conf
    let bezierCps: BezierPoint[] = []
    if (isCustom) {
      bezierCps = points
    } else {
      bezierCps.push({
        cp1: getP2(),
        center: {...getP2(true), x: x, y: y},
        cp2: getP2(),
        type: BezierPointType.RightAngle
      })
      bezierCps.push({
        cp1: getP2(),
        center: {...getP2(true), x: x + w, y: y},
        cp2: getP2(),
        type: BezierPointType.RightAngle
      })
      bezierCps.push({
        cp1: getP2(),
        center: {...getP2(true), x: x + w, y: y + h},
        cp2: getP2(),
        type: BezierPointType.RightAngle
      })
      bezierCps.push({
        cp1: getP2(),
        center: {...getP2(true), x: x, y: y + h},
        cp2: getP2(),
        type: BezierPointType.RightAngle
      })
      this.conf.points = bezierCps
    }

    ctx.save()

    ctx.strokeStyle = Colors.Line2
    ctx.fillStyle = fillColor
    ctx.beginPath()

    bezierCps.map((currentPoint: BezierPoint, index: number, array) => {
      let previousPoint: BezierPoint
      if (index === 0) {
        previousPoint = array[array.length - 1]
      } else {
        previousPoint = array[index - 1]
      }
      let lineType: LineType = LineType.Line
      if (
        currentPoint.type === BezierPointType.RightAngle &&
        previousPoint.type === BezierPointType.RightAngle
      ) {
        lineType = LineType.Line
      } else if (
        currentPoint.type !== BezierPointType.RightAngle &&
        previousPoint.type !== BezierPointType.RightAngle) {
        lineType = LineType.Bezier3
      } else {
        if (previousPoint.cp2.use || currentPoint.cp1.use) {
          lineType = LineType.Bezier2
        } else {
          lineType = LineType.Line
        }
      }
      switch (lineType) {
        case LineType.Line:
          // ctx.beginPath()
          ctx.lineTo2(previousPoint.center)
          ctx.lineTo2(currentPoint.center)
          // ctx.stroke()
          break
        case LineType.Bezier3:
          // ctx.beginPath()
          ctx.lineTo2(previousPoint.center)
          ctx.bezierCurveTo2(
            previousPoint.cp2,
            currentPoint.cp1,
            currentPoint.center)
          // ctx.stroke()
          break
        case LineType.Bezier2:
          let cp: P2
          if (previousPoint.cp2.use) cp = previousPoint.cp2
          if (currentPoint.cp1.use) cp = currentPoint.cp2
          // ctx.beginPath()
          ctx.lineTo2(previousPoint.center)
          ctx.quadraticCurveTo2(cp!, currentPoint.center)
          // ctx.stroke()
          break
      }
    })

    ctx.closePath()
    ctx.stroke()

    bezierCps.map((currentPoint: BezierPoint) => {
      draw.drawRound(ctx, currentPoint.center)
      if (currentPoint.cp1.use) draw.controlPoint(ctx, currentPoint.cp1, currentPoint.center)
      if (currentPoint.cp2.use) draw.controlPoint(ctx, currentPoint.cp2, currentPoint.center)
    })
    ctx.restore()

  }
}