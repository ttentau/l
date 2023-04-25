import {BaseShape} from "./core/BaseShape"
import {EllipseConfig} from "../config/EllipseConfig"
import {BaseConfig, Rect} from "../config/BaseConfig"
import draw from "../utils/draw"
import {
  BaseEvent2,
  BezierPointType,
  EditType,
  getP2,
  LinePath,
  LineShape,
  P,
  PointInfo,
  PointType, ShapeProps,
  ShapeStatus,
  StrokeAlign
} from "../types/type"
import {Math2} from "../utils/math"
import CanvasUtil2 from "../engine/CanvasUtil2"
import {v4 as uuid} from "uuid"
import {Bezier} from "../utils/bezier"
import helper from "../utils/helper"
import {ParentShape} from "./core/ParentShape";
import {Colors, defaultConfig} from "../utils/constant"
import {cloneDeep} from "lodash"

/**
 * @desc 获取长度对应的 鼠标控制点
 * */
const getMouseControlPointByLength = (length: number, p: P) => {
  //直线的方程式y= k*x
  //如果超过半个象限，那么公式相反，这里要注意startLength 等于整数的特殊情况
  let isYkx = Math.decimal(length) < 0.5
  switch (Math.trunc(length)) {
    case 0:
    case 2:
      isYkx = Math.decimal(length) < 0.5
      break
    case 1:
    case 3:
      isYkx = Math.decimal(length) > 0.5
      break
  }

  let d = 30
  let sx, sy, k2
  if (isYkx) {
    k2 = p.y / p.x
    sx = p.x
    sx = sx < 0 ? sx + d : sx - d
    sy = sx * k2
  } else {
    k2 = p.x / p.y
    sy = p.y
    sy = sy < 0 ? sy + d : sy - d
    sx = sy * k2
  }
  return {x: sx, y: sy}
}

export class Ellipse extends ParentShape {
  hoverEndMouseControlPoint: boolean = false
  enterEndMouseControlPoint: boolean = false
  cpMap = new Map()

  constructor(props: ShapeProps) {
    super(props)
    this.init()
  }

  init() {
    let {layout,} = this._config
    let {x, y, w, h} = layout
    let w2 = w / 2, h2 = h / 2
    let ox = 0.5522848 * w2, oy = 0.5522848 * h2

    //图形为整圆时的，4个线段中间点，以及相邻两个控制点。
    let right = {
      x: w2,
      y: 0
    }
    let cp1 = {
      x: right.x,
      y: right.y + oy
    }
    let bottom = {
      x: 0,
      y: h2
    }
    let cp2 = {
      x: bottom.x + ox,
      y: bottom.y
    }
    let cp3 = {
      x: bottom.x - ox,
      y: bottom.y
    }
    let left = {
      x: -w2,
      y: 0
    }
    let cp4 = {
      x: left.x,
      y: left.y + oy
    }
    let cp5 = {
      x: left.x,
      y: left.y - oy
    }
    let top = {
      x: 0,
      y: -h2
    }
    let cp6 = {
      x: top.x - ox,
      y: top.y
    }
    let cp7 = {
      x: top.x + ox,
      y: top.y
    }
    let cp8 = {
      x: right.x,
      y: right.y - oy
    }
    this.cpMap.set('line1', [cp1, cp2])
    this.cpMap.set('line2', [cp3, cp4])
    this.cpMap.set('line3', [cp5, cp6])
    this.cpMap.set('line4', [cp7, cp8])
    this.cpMap.set('right', right)
    this.cpMap.set('bottom', bottom)
    this.cpMap.set('left', left)
    this.cpMap.set('top', top)
    this.getStartAndEndPoint()
  }

  get _config(): EllipseConfig {
    return this.conf as EllipseConfig
  }

  set _config(val) {
    this.conf = val
  }

  //获取起点和终点
  getStartAndEndPoint() {
    let {
      layout,
      totalLength = 4,
      startLength = 0,
    } = this._config

    if (startLength === 0) {
      this._config.startPoint = this.cpMap.get('right')
    } else {
      let lineIndex = Math.trunc(startLength)
      let lineCps = this.getLineCps(lineIndex)
      this._config.startPoint = Bezier.getPointByT_3(Math.decimal(startLength), lineCps)
    }

    if (totalLength === 4) {
      this._config.endPoint = cloneDeep(this._config.startPoint)
    } else {
      let lineIndex = Math.trunc(totalLength)
      let lineCps = this.getLineCps(lineIndex)
      this._config.endPoint = Bezier.getPointByT_3(Math.decimal(totalLength), lineCps)
    }
  }

  //获取圆上的4条线段中某一条的控制点
  getLineCps(lineIndex: number): [p1: P, p2: P, p3: P, p4: P] {
    switch (lineIndex) {
      //特殊情况，当startLength不为0时，startLength + totalLength 可能会等于4
      //等于4，直接用第一段就行
      case 4:
      case 0:
        return [
          this.cpMap.get('right'),
          this.cpMap.get('line1')[0],
          this.cpMap.get('line1')[1],
          this.cpMap.get('bottom')]
      case 1:
        return [
          this.cpMap.get('bottom'),
          this.cpMap.get('line2')[0],
          this.cpMap.get('line2')[1],
          this.cpMap.get('left')]
      case 2:
        return [
          this.cpMap.get('left'),
          this.cpMap.get('line3')[0],
          this.cpMap.get('line3')[1],
          this.cpMap.get('top')]
      case 3:
        return [
          this.cpMap.get('top'),
          this.cpMap.get('line4')[0],
          this.cpMap.get('line4')[1],
          this.cpMap.get('right')]
    }
    return [] as any
  }

  drawShape(ctx: CanvasRenderingContext2D, newLayout: Rect, parent?: BaseConfig): void {
    if (this.status === ShapeStatus.Edit) return
    let {
      radius,
      fillColor, borderColor, lineWidth, strokeAlign
    } = this.conf
    let {x, y, w, h} = newLayout

    ctx.lineWidth = lineWidth ?? defaultConfig.lineWidth

    //填充图形
    ctx.fillStyle = fillColor
    let pathList = this.getShapePath(newLayout, this.conf.radius)
    pathList.map(({close, path}) => {
      if (close) {
        ctx.fill(path)
      } else {
        ctx.stroke(path)
      }
    })

    //描边
    let lw2 = ctx.lineWidth / 2
    if (strokeAlign === StrokeAlign.INSIDE) {
      x += lw2, y += lw2, w -= lw2 * 2, h -= lw2 * 2, radius -= lw2
    } else if (strokeAlign === StrokeAlign.OUTSIDE) {
      x -= lw2, y -= lw2, w += lw2 * 2, h += lw2 * 2, radius += lw2
    }
    ctx.strokeStyle = borderColor
    pathList = this.getShapePath({x, y, w, h}, radius)
    pathList.map(line => {
      ctx.stroke(line.path)
    })
  }

  // drawShape2(ctx: CanvasRenderingContext2D, newLayout: Rect, parent?: BaseConfig): void {
  //   let {
  //     fillColor, borderColor, rotation, flipVertical, flipHorizontal,
  //     totalLength = 4, startLength = 0
  //   } = this._config
  //   let {x, y, w, h} = newLayout
  //   let w2 = w / 2, h2 = h / 2
  //
  //   ctx.save()
  //
  //   //http://www.alloyteam.com/2015/07/canvas-hua-tuo-yuan-di-fang-fa/
  //   //这里也可以用.5和.6来算ox和oy
  //   let ox = 0.5522848 * w2, oy = 0.5522848 * h2
  //
  //   //TODO 可以优化
  //   //图形为整圆时的，4个线段中间点，以及相邻两个控制点。
  //   let start = {
  //     x: w2,
  //     y: 0
  //   }
  //   let cp1 = {
  //     x: start.x,
  //     y: start.y + oy
  //   }
  //   let bottom = {
  //     x: 0,
  //     y: h2
  //   }
  //   let cp2 = {
  //     x: bottom.x + ox,
  //     y: bottom.y
  //   }
  //   let cp3 = {
  //     x: bottom.x - ox,
  //     y: bottom.y
  //   }
  //   let left = {
  //     x: -w2,
  //     y: 0
  //   }
  //   let cp4 = {
  //     x: left.x,
  //     y: left.y + oy
  //   }
  //   let cp5 = {
  //     x: left.x,
  //     y: left.y - oy
  //   }
  //   let top = {
  //     x: 0,
  //     y: -h2
  //   }
  //   let cp6 = {
  //     x: top.x - ox,
  //     y: top.y
  //   }
  //   let cp7 = {
  //     x: top.x + ox,
  //     y: top.y
  //   }
  //   let cp8 = {
  //     x: start.x,
  //     y: start.y - oy
  //   }
  //   this._config.cps = [
  //     start,
  //     cp1,
  //     cp2,
  //     bottom,
  //     cp3,
  //     cp4,
  //     left,
  //     cp5,
  //     cp6,
  //     top,
  //     cp7,
  //     cp8,
  //   ]
  //   //获取第几条曲线的所有控制点
  //   const getBezierControlPoint = (length: number): [p1: P, p2: P, p3: P, p4: P] => {
  //     switch (length) {
  //       //特殊情况，当startLength不为0时，startLength + totalLength 可能会等于4
  //       //等于4，直接用第一段就行
  //       case 4:
  //       case 0:
  //         return [start, cp1, cp2, bottom]
  //       case 1:
  //         return [bottom, cp3, cp4, left]
  //       case 2:
  //         return [left, cp5, cp6, top]
  //       case 3:
  //         return [top, cp7, cp8, start]
  //     }
  //     return [] as any
  //   }
  //   this._config.getCps = getBezierControlPoint
  //
  //   //渲染，非整个圆时，所有的控制点
  //   let showNotNormalCp = false
  //   //渲染，整个圆时，所有的控制点
  //   let showNormalCp = false
  //   if (showNormalCp) {
  //     draw.drawRound(ctx, start)
  //     draw.drawRound(ctx, cp1)
  //     draw.drawRound(ctx, bottom)
  //     draw.drawRound(ctx, cp2)
  //     draw.drawRound(ctx, cp3)
  //     draw.drawRound(ctx, left)
  //     draw.drawRound(ctx, cp4)
  //     draw.drawRound(ctx, cp5)
  //     draw.drawRound(ctx, top)
  //     draw.drawRound(ctx, cp6)
  //     draw.drawRound(ctx, cp7)
  //     draw.drawRound(ctx, cp8)
  //   }
  //
  //   if (startLength) {
  //     let intStartLength = Math.trunc(startLength)
  //     let startLengthCps = getBezierControlPoint(intStartLength)
  //     this._config.startPoint = Bezier.getPointByT_3(Math.decimal(startLength), startLengthCps)
  //   }
  //
  //   //是否是整圆
  //   let fullEllipse = totalLength === 4
  //
  //   if (fullEllipse) {
  //     ctx.beginPath()
  //     ctx.ellipse(0, 0, w2, h2, jiaodu2hudu(0), 0, 2 * Math.PI) //倾斜 45°角
  //     ctx.closePath()
  //     let bezierCps: BezierPoint[] = []
  //     bezierCps.push({
  //       id: uuid(),
  //       cp1: {...getP2(true), ...cp8},
  //       center: {...getP2(true), ...start},
  //       cp2: {...getP2(true), ...cp1},
  //       type: BezierPointType.MirrorAngleAndLength
  //     })
  //     bezierCps.push({
  //       id: uuid(),
  //       cp1: {...getP2(true), ...cp2},
  //       center: {...getP2(true), ...bottom},
  //       cp2: {...getP2(true), ...cp3},
  //       type: BezierPointType.MirrorAngleAndLength
  //     })
  //     bezierCps.push({
  //       id: uuid(),
  //       cp1: {...getP2(true), ...cp4},
  //       center: {...getP2(true), ...left},
  //       cp2: {...getP2(true), ...cp5},
  //       type: BezierPointType.MirrorAngleAndLength
  //     })
  //     bezierCps.push({
  //       id: uuid(),
  //       cp1: {...getP2(true), ...cp6},
  //       center: {...getP2(true), ...top},
  //       cp2: {...getP2(true), ...cp7},
  //       type: BezierPointType.MirrorAngleAndLength
  //     })
  //   } else {
  //     ctx.beginPath()
  //
  //     let bezierCps: BezierPoint[] = []
  //     // let totalLength = 3.5//总长度
  //     let totalPart = 8 //总份数
  //     if (Math.trunc(totalLength) === 1) totalPart = 4
  //     if (Math.trunc(totalLength) === 0) totalPart = 2
  //
  //     let perPart = totalLength / totalPart
  //     // console.log('每一份', perPart)
  //     let currentPoint
  //     let lastPoint = start
  //     let bezierPrevious, bezierCurrent
  //     let length14Point, length34Point = null
  //     let intLastLength, intCurrentLength, lastLength = 0
  //     let currentLength = perPart
  //     // console.log('currentLength', currentLength, 'lastLength', lastLength)
  //     // draw.drawRound(ctx, start)
  //
  //     if (startLength) {
  //       //曲线长度与角度间的比例
  //       // let k = 100 / 90
  //       // startLength = k * startLength / 100
  //       lastPoint = this._config.startPoint
  //       lastLength = startLength
  //       currentLength = lastLength + perPart
  //       bezierCps.push({
  //         id: uuid(),
  //         cp1: getP2(),
  //         center: {
  //           use: true,
  //           x: this._config.startPoint.x,
  //           y: this._config.startPoint.y,
  //           px: 0,
  //           py: 0,
  //           rx: 0,
  //           ry: 0,
  //         },
  //         cp2: getP2(),
  //         type: BezierPointType.NoMirror
  //       })
  //     } else {
  //       bezierCps.push({
  //         id: uuid(),
  //         cp1: getP2(),
  //         center: {
  //           use: true,
  //           x: start.x,
  //           y: start.y,
  //           px: 0,
  //           py: 0,
  //           rx: 0,
  //           ry: 0,
  //         },
  //         cp2: getP2(),
  //         type: BezierPointType.NoMirror
  //       })
  //     }
  //
  //     for (let i = 1; i <= totalPart; i++) {
  //       intCurrentLength = Math.trunc(currentLength)
  //       intLastLength = Math.trunc(lastLength)
  //
  //       //计算1/4，3/4长度
  //       let length14 = lastLength + perPart * (1 / 4)
  //       let length34 = perPart * (2 / 4) + length14
  //
  //       //默认情况下，用于计算1/4点，3/4点，可以共用一条对应的线段
  //       bezierCurrent = bezierPrevious = getBezierControlPoint(intCurrentLength)
  //       //计算当前点必须用当前长度线段的4个控制点来算
  //       currentPoint = Bezier.getPointByT_3(Math.decimal(currentLength), bezierCurrent)
  //
  //       //特殊情况
  //       //如果，1/4的长度，不在当前线段内，那么肯定在上一个线段内
  //       if (Math.trunc(length14) !== intCurrentLength) {
  //         bezierPrevious = getBezierControlPoint(intCurrentLength - 1)
  //       }
  //       //如果，3/4的长度，不在当前线段内，那么肯定在上一个线段内
  //       if (Math.trunc(length34) !== intCurrentLength) {
  //         bezierCurrent = getBezierControlPoint(intCurrentLength - 1)
  //       }
  //
  //       //计算1/4长度，3/4长度对应的点
  //       length14Point = Bezier.getPointByT_3(Math.decimal(length14), bezierPrevious)
  //       length34Point = Bezier.getPointByT_3(Math.decimal(length34), bezierCurrent)
  //
  //       //利用1/4点、3/4点、起始点、终点，反推控制点
  //       let cps = Bezier.getControlPointsByLinePoint(length14Point, length34Point, lastPoint, currentPoint)
  //
  //       // 因为最后一个控制点（非数组的最后一个点）默认只需center和cp1与前一个点的center和cp2的4个点，组成贝塞尔曲线
  //       //所以cp2是无用的，所以添加当前点时，需要把上一个点的cp2为正确的值并启用
  //       bezierCps[bezierCps.length - 1].cp2 = {
  //         use: true,
  //         x: cps[0].x,
  //         y: cps[0].y,
  //         px: 0,
  //         py: 0,
  //         rx: 0,
  //         ry: 0,
  //       }
  //
  //       //默认不启用cp2，因为最后一个控制点，用不到
  //       bezierCps.push({
  //         id: uuid(),
  //         cp1: {
  //           use: true,
  //           x: cps[1].x,
  //           y: cps[1].y,
  //           px: 0,
  //           py: 0,
  //           rx: 0,
  //           ry: 0,
  //         },
  //         center: {
  //           use: true,
  //           x: currentPoint.x,
  //           y: currentPoint.y,
  //           px: 0,
  //           py: 0,
  //           rx: 0,
  //           ry: 0,
  //         },
  //         cp2: getP2(),
  //         type: BezierPointType.MirrorAngleAndLength
  //       })
  //       // ctx.beginPath()
  //       // ctx.moveTo(lastPoint.x, lastPoint.y)
  //       // ctx.bezierCurveTo2(cps[0], cps[1], currentPoint)
  //       // ctx.stroke()
  //       lastPoint = currentPoint
  //       lastLength = currentLength
  //       currentLength += perPart
  //     }
  //
  //
  //     this._config.endPoint = bezierCps[bezierCps.length - 1].center
  //
  //     bezierCps.push({
  //       id: uuid(),
  //       cp1: getP2(),
  //       center: getP2(true),
  //       cp2: getP2(),
  //       type: BezierPointType.RightAngle
  //     })
  //
  //     bezierCps.map((currentPoint: BezierPoint, index: number, array) => {
  //       let previousPoint: BezierPoint
  //       if (index === 0) {
  //         previousPoint = array[array.length - 1]
  //       } else {
  //         previousPoint = array[index - 1]
  //       }
  //       let lineType: LineType = LineType.Line
  //       if (
  //         currentPoint.type === BezierPointType.RightAngle &&
  //         previousPoint.type === BezierPointType.RightAngle
  //       ) {
  //         lineType = LineType.Line
  //       } else if (
  //         currentPoint.type !== BezierPointType.RightAngle &&
  //         previousPoint.type !== BezierPointType.RightAngle) {
  //         lineType = LineType.Bezier3
  //       } else {
  //         if (previousPoint.cp2.use || currentPoint.cp1.use) {
  //           lineType = LineType.Bezier2
  //         } else {
  //           lineType = LineType.Line
  //         }
  //       }
  //       switch (lineType) {
  //         case LineType.Line:
  //           // ctx.beginPath()
  //           ctx.lineTo2(previousPoint.center)
  //           ctx.lineTo2(currentPoint.center)
  //           // ctx.stroke()
  //           break
  //         case LineType.Bezier3:
  //           // ctx.beginPath()
  //           ctx.lineTo2(previousPoint.center)
  //           ctx.bezierCurveTo2(
  //             previousPoint.cp2,
  //             currentPoint.cp1,
  //             currentPoint.center)
  //           // ctx.stroke()
  //           break
  //         case LineType.Bezier2:
  //           let cp: P2
  //           if (previousPoint.cp2.use) cp = previousPoint.cp2
  //           if (currentPoint.cp1.use) cp = currentPoint.cp2
  //           // ctx.beginPath()
  //           ctx.lineTo2(previousPoint.center)
  //           ctx.quadraticCurveTo2(cp!, currentPoint.center)
  //           // ctx.stroke()
  //           break
  //       }
  //     })
  //     ctx.closePath()
  //
  //     if (showNotNormalCp) {
  //       bezierCps.map((currentPoint: BezierPoint) => {
  //         draw.drawRound(ctx, currentPoint.center)
  //         if (currentPoint.cp1.use) draw.controlPoint(ctx, currentPoint.cp1, currentPoint.center)
  //         if (currentPoint.cp2.use) draw.controlPoint(ctx, currentPoint.cp2, currentPoint.center)
  //       })
  //     }
  //   }
  //
  //   ctx.fillStyle = fillColor
  //   ctx.fill()
  //   ctx.strokeStyle = borderColor
  //   ctx.stroke()
  //
  //   ctx.restore()
  // }

  drawHover(ctx: CanvasRenderingContext2D, newLayout: Rect): any {
    ctx.strokeStyle = defaultConfig.strokeStyle
    //容器hover时只需要描边矩形就行了
    let pathList = this.getShapePath(newLayout, 0)
    pathList.map(linePath => {
      ctx.stroke(linePath.path)
    })
  }

  drawSelected(ctx: CanvasRenderingContext2D, newLayout: Rect): any {
    draw.selected(ctx, newLayout)
  }

  drawSelectedHover(ctx: CanvasRenderingContext2D, newLayout: Rect) {
    let {
      layout,
      radius,
      fillColor, borderColor, rotation,
      type, flipVertical, flipHorizontal, children,
      totalLength = 4,
      startLength = 0
    } = this._config
    let {x, y, w, h} = layout
    let w2 = w / 2, h2 = h / 2
    ctx.strokeStyle = 'rgb(139,80,255)'
    ctx.save()

    let r2 = 4
    //圆终点
    let endPoint = {x: w2, y: 0}
    //圆起点
    let startPoint = {x: w2, y: 0}
    //圆内径
    let ratioPoint = {x: 0, y: 0}

    startPoint = helper.getStraightLineCenterPoint(ratioPoint, this._config.startPoint)
    endPoint = helper.getStraightLineCenterPoint(ratioPoint, this._config.endPoint)
    // console.log('startPoint', startPoint)
    // console.log('endPoint', endPoint)
    // ratioPoint = {x: 0, y: 0,}
    if (totalLength !== 4) {
      draw.drawRound(ctx, ratioPoint, r2,)
      draw.drawRound(ctx, startPoint, r2,)
      draw.drawRound(ctx, endPoint, r2,)
    } else {
      endPoint = getMouseControlPointByLength(0, this._config.endPoint)
      draw.drawRound(ctx, endPoint, r2,)
    }
    this._config.startMouseControlPoint = startPoint
    this._config.endMouseControlPoint = endPoint
    ctx.restore()
  }

  drawEdit(ctx: CanvasRenderingContext2D, newLayout: Rect): any {
    // this.log('drawEdit')
    let {
      fillColor, lineShapes
    } = this.conf

    ctx.save()
    ctx.strokeStyle = Colors.Line2
    ctx.fillStyle = fillColor

    let pathList = super.getCustomShapePath()
    pathList.map(linePath => {
      linePath.close && ctx.fill(linePath.path)
      ctx.stroke(linePath.path)
    })


    if ((this.editHover.type === EditType.Line
        || this.editHover.type === EditType.CenterPoint)
      && this.editHover.pointIndex !== -1
    ) {
      draw.drawRound(ctx, this.hoverLineCenterPoint)
    }
    let {lineIndex, pointIndex, type} = this.editStartPointInfo
    //先绘制控制线，好被后续的圆点遮盖
    if (pointIndex !== -1 && type !== EditType.Line) {
      let line = lineShapes[lineIndex]
      let point
      if (pointIndex === 0) {
        if (line.close) {
          point = this.getPoint(line.points[line.points.length - 1])
          if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
          if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
        }
      } else {
        point = this.getPoint(line.points[pointIndex - 1])
        if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
        if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
      }
      if (pointIndex === line.points.length - 1) {
        if (line.close) {
          point = this.getPoint(line.points[0])
          if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
          if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
        }
      } else {
        point = this.getPoint(line.points[pointIndex + 1])
        if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
        if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
      }
    }
    lineShapes.map(line => {
      line.points.map((pointInfo) => {
        let point = this.getPoint(pointInfo)
        // if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
        // if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
        draw.drawRound(ctx, point.center)
      })
    })
    if (pointIndex !== -1 && type !== EditType.Line) {
      let line = lineShapes[lineIndex]
      let point = this.getPoint(line.points[pointIndex])
      if (point.cp1.use) draw.controlPoint(ctx, point.cp1, point.center)
      if (point.cp2.use) draw.controlPoint(ctx, point.cp2, point.center)
      draw.currentPoint(ctx, point.center)
    }

    ctx.restore()
  }

  onDbClick(event: BaseEvent2, parents: BaseShape[]): boolean {
    return false
  }

  onMouseDown(event: BaseEvent2, parents: BaseShape[]): boolean {
    if (this.hoverEndMouseControlPoint) {
      this.enterEndMouseControlPoint = true
      return true
    }
    return false
  }

  onMouseMove(event: BaseEvent2, parents: BaseShape[]): boolean {
    let {x, y,} = event.point
    let cu = CanvasUtil2.getInstance()
    let cx = x
    let cy = y
    if (this.enterEndMouseControlPoint) {

      const {x, y, w, h} = this.conf
      let w2 = w / 2, h2 = h / 2
      let ox = 0.5522848 * w2, oy = .5522848 * h2;
      let bs: any = this._config.getCps(3)

      let a, b, c, d = 0
      let p0, p1, p2, p3, p = null
      p3 = bs[3]
      p2 = bs[2]
      p1 = bs[1]
      p0 = bs[0]

      let mousePoint2 = {x: cx, y: cy}
      let k = mousePoint2.y / mousePoint2.x
      console.log('k', k, mousePoint2)
      k = (mousePoint2.y - y - h2) / (mousePoint2.x - x - w2)
      console.log('k2', k)
      draw.drawRound(cu.ctx, mousePoint2)

      let ps = [p0, p1, p2, p3]

      let XA = p3.x - 3 * p2.x + 3 * p1.x - p0.x,
        XB = 3 * (p2.x - 2 * p1.x + p0.x),
        XC = 3 * (p1.x - p0.x),
        XD = p0.x
      let YA = p3.y - 3 * p2.y + 3 * p1.y - p0.y,
        YB = 3 * (p2.y - 2 * p1.y + p0.y),
        YC = 3 * (p1.y - p0.y),
        YD = p0.y
      let A = k * XA - YA
      let B = k * XB - YB
      let C = k * XC - YC
      let D = k * XD - YD

      let t: any[] = Math2.solveCubic(A, B, C, D)
      t = t.filter(v => 0 <= v && v <= 1.01)
      console.log('t', t)
      if (t.length) {
        // @ts-ignore
        this.conf.totalLength = 3 + t[0] ?? 0.5
        cu.render()
      }
      // let mousePoint2 = helper.getBezierPointByLength(t[0], ps)
      // console.log('mousePoint2', mousePoint2)
      // draw.drawRound(cu.ctx, mousePoint2)

      return true;
    }
    return false
  }

  onMouseUp(event: BaseEvent2, parents: BaseShape[]): boolean {
    this.enterEndMouseControlPoint = false
    return false
  }

  onMouseDowned(event: BaseEvent2, parents: BaseShape[]): boolean {
    return false;
  }

  getShapePath(layout: Rect, r: number): LinePath[] {
    if (this.conf.isCustom) {
      return super.getCustomShapePath()
    }
    let {x, y, w, h} = layout
    let path = new Path2D()
    path.ellipse(0, 0, w / 2, h / 2, 0, 0, 2 * Math.PI);
    path.closePath()
    return [{close: true, path}]
  }

  beforeEvent(event: BaseEvent2): boolean {
    return false
  }

  beforeIsInShape(): boolean {
    if (this.enterEndMouseControlPoint) {
      return true
    }
    return false
  }

  getCustomPoint(): LineShape[] {
    let {
      fillColor, borderColor, rotation, flipVertical, flipHorizontal,
      totalLength = 4, startLength = 0
    } = this._config
    let {w, h} = this._config.layout
    let w2 = w / 2, h2 = h / 2
    let x = -w / 2, y = -h / 2

    //http://www.alloyteam.com/2015/07/canvas-hua-tuo-yuan-di-fang-fa/
    //这里也可以用.5和.6来算ox和oy
    let ox = 0.5522848 * w2, oy = 0.5522848 * h2

    //TODO 可以优化
    //图形为整圆时的，4个线段中间点，以及相邻两个控制点。
    let start = {
      x: w2,
      y: 0
    }
    let cp1 = {
      x: start.x,
      y: start.y + oy
    }
    let bottom = {
      x: 0,
      y: h2
    }
    let cp2 = {
      x: bottom.x + ox,
      y: bottom.y
    }
    let cp3 = {
      x: bottom.x - ox,
      y: bottom.y
    }
    let left = {
      x: -w2,
      y: 0
    }
    let cp4 = {
      x: left.x,
      y: left.y + oy
    }
    let cp5 = {
      x: left.x,
      y: left.y - oy
    }
    let top = {
      x: 0,
      y: -h2
    }
    let cp6 = {
      x: top.x - ox,
      y: top.y
    }
    let cp7 = {
      x: top.x + ox,
      y: top.y
    }
    let cp8 = {
      x: start.x,
      y: start.y - oy
    }
    this._config.cps = [
      start,
      cp1,
      cp2,
      bottom,
      cp3,
      cp4,
      left,
      cp5,
      cp6,
      top,
      cp7,
      cp8,
    ]
    //获取第几条曲线的所有控制点
    const getBezierControlPoint = (length: number): [p1: P, p2: P, p3: P, p4: P] => {
      switch (length) {
        //特殊情况，当startLength不为0时，startLength + totalLength 可能会等于4
        //等于4，直接用第一段就行
        case 4:
        case 0:
          return [start, cp1, cp2, bottom]
        case 1:
          return [bottom, cp3, cp4, left]
        case 2:
          return [left, cp5, cp6, top]
        case 3:
          return [top, cp7, cp8, start]
      }
      return [] as any
    }
    this._config.getCps = getBezierControlPoint

    if (startLength) {
      let intStartLength = Math.trunc(startLength)
      let startLengthCps = getBezierControlPoint(intStartLength)
      this._config.startPoint = Bezier.getPointByT_3(Math.decimal(startLength), startLengthCps)
    }

    //是否是整圆
    let fullEllipse = totalLength === 4

    if (fullEllipse) {
      let points: PointInfo[] = []
      points.push({
        type: PointType.Single,
        point: {
          id: uuid(),
          cp1: {...getP2(true), ...cp8},
          center: {...getP2(true), ...start},
          cp2: {...getP2(true), ...cp1},
          type: BezierPointType.MirrorAngleAndLength
        }
      })
      points.push({
        type: PointType.Single,
        point: {
          id: uuid(),
          cp1: {...getP2(true), ...cp2},
          center: {...getP2(true), ...bottom},
          cp2: {...getP2(true), ...cp3},
          type: BezierPointType.MirrorAngleAndLength
        }
      })
      points.push({
        type: PointType.Single,
        point: {
          id: uuid(),
          cp1: {...getP2(true), ...cp4},
          center: {...getP2(true), ...left},
          cp2: {...getP2(true), ...cp5},
          type: BezierPointType.MirrorAngleAndLength
        }
      })
      points.push({
        type: PointType.Single,
        point: {
          id: uuid(),
          cp1: {...getP2(true), ...cp6},
          center: {...getP2(true), ...top},
          cp2: {...getP2(true), ...cp7},
          type: BezierPointType.MirrorAngleAndLength
        }
      })
      return [{close: true, points: points}]
    } else {
      let points: PointInfo[] = []
      // let totalLength = 3.5//总长度
      let totalPart = 8 //总份数
      if (Math.trunc(totalLength) === 1) totalPart = 4
      if (Math.trunc(totalLength) === 0) totalPart = 2

      let perPart = totalLength / totalPart
      // console.log('每一份', perPart)
      let currentPoint
      let lastPoint = start
      let bezierPrevious, bezierCurrent
      let length14Point, length34Point = null
      let intLastLength, intCurrentLength, lastLength = 0
      let currentLength = perPart
      // console.log('currentLength', currentLength, 'lastLength', lastLength)
      // draw.drawRound(ctx, start)

      if (startLength) {
        //曲线长度与角度间的比例
        // let k = 100 / 90
        // startLength = k * startLength / 100
        lastPoint = this._config.startPoint
        lastLength = startLength
        currentLength = lastLength + perPart
        points.push({
          type: PointType.Single,
          point: {
            id: uuid(),
            cp1: getP2(),
            center: {
              use: true,
              x: this._config.startPoint.x,
              y: this._config.startPoint.y,
              px: 0,
              py: 0,
              rx: 0,
              ry: 0,
            },
            cp2: getP2(),
            type: BezierPointType.NoMirror
          }
        })
      } else {
        points.push({
          type: PointType.Single,
          point: {
            id: uuid(),
            cp1: getP2(),
            center: {
              use: true,
              x: start.x,
              y: start.y,
              px: 0,
              py: 0,
              rx: 0,
              ry: 0,
            },
            cp2: getP2(),
            type: BezierPointType.NoMirror
          }
        })
      }

      for (let i = 1; i <= totalPart; i++) {
        intCurrentLength = Math.trunc(currentLength)
        intLastLength = Math.trunc(lastLength)

        //计算1/4，3/4长度
        let length14 = lastLength + perPart * (1 / 4)
        let length34 = perPart * (2 / 4) + length14

        //默认情况下，用于计算1/4点，3/4点，可以共用一条对应的线段
        bezierCurrent = bezierPrevious = getBezierControlPoint(intCurrentLength)
        //计算当前点必须用当前长度线段的4个控制点来算
        currentPoint = Bezier.getPointByT_3(Math.decimal(currentLength), bezierCurrent)

        //特殊情况
        //如果，1/4的长度，不在当前线段内，那么肯定在上一个线段内
        if (Math.trunc(length14) !== intCurrentLength) {
          bezierPrevious = getBezierControlPoint(intCurrentLength - 1)
        }
        //如果，3/4的长度，不在当前线段内，那么肯定在上一个线段内
        if (Math.trunc(length34) !== intCurrentLength) {
          bezierCurrent = getBezierControlPoint(intCurrentLength - 1)
        }

        //计算1/4长度，3/4长度对应的点
        length14Point = Bezier.getPointByT_3(Math.decimal(length14), bezierPrevious)
        length34Point = Bezier.getPointByT_3(Math.decimal(length34), bezierCurrent)

        //利用1/4点、3/4点、起始点、终点，反推控制点
        let cps = Bezier.getControlPointsByLinePoint(length14Point, length34Point, lastPoint, currentPoint)

        // 因为最后一个控制点（非数组的最后一个点）默认只需center和cp1与前一个点的center和cp2的4个点，组成贝塞尔曲线
        //所以cp2是无用的，所以添加当前点时，需要把上一个点的cp2为正确的值并启用

        points[points.length - 1].point!.cp2 = {
          use: true,
          x: cps[0].x,
          y: cps[0].y,
          px: 0,
          py: 0,
          rx: 0,
          ry: 0,
        }

        //默认不启用cp2，因为最后一个控制点，用不到
        points.push({
          type: PointType.Single,
          point: {
            id: uuid(),
            cp1: {
              use: true,
              x: cps[1].x,
              y: cps[1].y,
              px: 0,
              py: 0,
              rx: 0,
              ry: 0,
            },
            center: {
              use: true,
              x: currentPoint.x,
              y: currentPoint.y,
              px: 0,
              py: 0,
              rx: 0,
              ry: 0,
            },
            cp2: getP2(),
            type: BezierPointType.MirrorAngleAndLength
          }
        })
        lastPoint = currentPoint
        lastLength = currentLength
        currentLength += perPart
      }

      this._config.endPoint = points[points.length - 1].point!.center

      points.push({
        type: PointType.Single,
        point: {
          id: uuid(),
          cp1: getP2(),
          center: getP2(true),
          cp2: getP2(),
          type: BezierPointType.RightAngle
        }
      })
      return [{close: true, points: points}]
    }
  }

  isInShape(mousePoint: P, cu: CanvasUtil2): boolean {
    return helper.isInBox(mousePoint, this.conf.box)
  }

  isInShapeOnSelect(mousePoint: P, cu: CanvasUtil2): boolean {
    let {
      layout: {x, y, w, h},
      center
    } = this._config
    //绝对点
    let absoluteEndMouseControlPoint = {
      x: this._config.startMouseControlPoint.x + center.x,
      y: this._config.startMouseControlPoint.y + center.y,
    }
    if (helper.isInPoint(mousePoint, absoluteEndMouseControlPoint, 4)) {
      document.body.style.cursor = "pointer"
      this.hoverEndMouseControlPoint = true
      return true
    }
    // //绝对点
    // let startMouseControlPoint = {
    //   x: this._config.startMouseControlPoint.x + center.x,
    //   y: this._config.startMouseControlPoint.y + center.y,
    // }
    // if (helper.isInPoint(mousePoint, startMouseControlPoint, 4)) {
    //   document.body.style.cursor = "pointer"
    //   this.hoverEndMouseControlPoint = true
    //   return true
    // }
    this.hoverEndMouseControlPoint = false
    return false
  }

}