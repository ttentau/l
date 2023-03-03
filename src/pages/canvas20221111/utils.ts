import {
  BezierPoint,
  BezierPointType,
  getDefaultPoint,
  IState,
  LineType,
  Point2,
  Shape,
  ShapeConfig,
  ShapeType,
  TextAlign
} from "./type"
import {store} from "./store"
// @ts-ignore
import {v4 as uuid} from 'uuid'
import {Colors} from "./constant"
import {jiaodu2hudu} from "../../utils"

export function renderCanvas(
  rect: Shape,
  state: IState,
  parent?: Shape,
) {
  let {
    ctx, enterLT, enterRT, selectRect, activeHand, enter, offsetX, offsetY,
    handMove, handScale,
    currentPoint,
    isEdit
  } = state
  // console.log('renderCanvas', enterLT)
  ctx.save()
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal,
  }
    = parent ? parent : rect
  if (parent) {
    type = rect.type

    let outside = .5
    x = x - outside
    y = y - outside
    w = w + 2 * outside
    h = h + 2 * outside
  }

  let oldCenter: { x: number; y: number; }
  let currentCenter: { x: number; y: number; } = {
    x: x + (w / 2),
    y: y + (h / 2)
  }
  let isMe = selectRect?.id === (parent ? parent.id : rect.id)
  if ((enterLT || enterRT) && isMe) {
    let s = selectRect!
    oldCenter = {
      x: s.x + (s.w / 2),
      y: s.y + (s.h / 2)
    }
    // console.log('oldCenter', oldCenter)
    // console.log('newCenter', newCenter)
  }

  ctx.lineWidth = lineWidth
  ctx.fillStyle = fillColor
  ctx.strokeStyle = borderColor
  // let tranX = 0
  // let tranY = 0
  let tranX = 0
  let tranY = 0
  let scaleX = 1
  let scaleY = 1
  if (rotate || flipHorizontal) {
    tranX = x + w / 2
    tranY = y + h / 2
    x = -w / 2
    y = -h / 2
  }

  if (flipHorizontal) {
    scaleX = -1
    // tranX = -tranX
    //如果在翻转情况下，自由拉伸要将tranX减去两个中心点偏移量
    if ((enterRT || enterLT) && isMe) {
      // console.log('tranX1', tranX)
      let d = oldCenter!.x - currentCenter!.x
      tranX += d * 2
      // console.log('tranX2', tranX)
    }
  }
  if (flipVertical) {
    // console.log('flipVertical', flipVertical)
    scaleY = -1
    // tranY = -tranY
  }

  ctx.translate(tranX, tranY)
  ctx.scale(scaleX, scaleY)
  ctx.rotate(rotate * Math.PI / 180)

  // ctx.strokeRect(x, y, w, h)
  if (
    type === ShapeType.RECT
    || type === ShapeType.HOVER
    || type === ShapeType.SELECT
  ) {
    if (radius && type !== ShapeType.SELECT) {
      renderRoundRect({x, y, w, h}, radius, ctx)
    } else {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x, y);
      ctx.closePath()
    }
  }

  switch (type) {
    case ShapeType.ELLIPSE:
      let a = w / 2, b = h / 2
      let ox = .5 * a
      let oy = .6 * b

      ctx.save();
      ctx.translate(x + a, y + b);
      ctx.beginPath();
      ctx.moveTo(0, b);
      ctx.bezierCurveTo(ox, b, a, oy, a, 0);
      ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
      ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
      ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      break
    case ShapeType.STAR:
      ctx.save();
      let outA = w / 2;
      let outB = h / 2;
      let innerA = outA / 2.6;
      let innerB = outB / 2.6;
      let x1, x2, y1, y2;
      ctx.translate(x + w / 2, y + h / 2);

      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        x1 = outA * Math.cos((54 + i * 72) / 180 * Math.PI);
        y1 = outB * Math.sin((54 + i * 72) / 180 * Math.PI);
        x2 = innerA * Math.cos((18 + i * 72) / 180 * Math.PI);
        y2 = innerB * Math.sin((18 + i * 72) / 180 * Math.PI);
        //内圆
        ctx.lineTo(x2, y2);
        //外圆
        ctx.lineTo(x1, y1);
      }
      ctx.closePath();

      ctx.stroke();
      ctx.restore();

      break
    case ShapeType.POLYGON: {
      ctx.save();
      let outA = w / 2;
      let outB = h / 2;
      let x1, x2, y1, y2;
      ctx.translate(x + w / 2, y + h / 2);

      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        x1 = outA * Math.cos((30 + i * 120) / 180 * Math.PI);
        y1 = outB * Math.sin((30 + i * 120) / 180 * Math.PI);
        ctx.lineTo(x1, y1);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      break
    }
    case ShapeType.TEXT:
      // ctx.fillStyle = 'white'
      ctx.font = `${rect.fontWeight} ${rect.fontSize}rem "${rect.fontFamily}", sans-serif`;
      ctx.textBaseline = 'top'
      // ctx.textAlign = rect.textAlign

      // console.log('render', rect.texts)
      rect.brokenTexts?.map((text, index) => {
        let lX = x
        if (rect.textAlign === TextAlign.CENTER) {
          let m = ctx.measureText(text)
          lX = x + rect.w / 2 - m.width / 2
        }
        if (rect.textAlign === TextAlign.RIGHT) {
          let m = ctx.measureText(text)
          lX = x + rect.w - m.width
        }
        text && ctx.fillText(text, lX, y + (index * rect.textLineHeight));
      })
      break
    case ShapeType.IMG:
      let currentImg = store.images.get(rect.id)
      if (currentImg) {
        ctx.drawImage(currentImg, x, y, w, h);
      } else {
        let img = new Image();
        img.onload = () => {
          store.images.set(rect.id, img)
          ctx.drawImage(img, x, y, w, h);
        }
        img.src = new URL(rect.img, import.meta.url).href
      }

      // ctx.fillStyle = fillColor
      // ctx.fill()
      // ctx.strokeStyle = borderColor
      // ctx.stroke()
      break
    case ShapeType.PENCIL:
      if (rect.points?.length) {
        ctx.strokeStyle = rect.borderColor
        // ctx.lineCap = "round";
        ctx.moveTo(rect.points[0]?.x, rect.points[0]?.y)
        rect.points.map((item: any) => {
          ctx.lineTo(item.x, item.y)
        })
        ctx.stroke()
      }
      break
    case ShapeType.PEN:
      if (rect.points?.length) {
        ctx.strokeStyle = rect.borderColor
        ctx.lineCap = "round";
        ctx.moveTo(rect.points[0]?.x, rect.points[0]?.y)
        rect.points.map((item: any, index: number, arr: any[]) => {
          if (isEdit && isMe) {
            renderRound({
                x: item.x,
                y: item.y,
                w: rect.w,
                h: rect.h,
              }, 4, ctx,
              index !== arr.length - 1 ? undefined : ShapeType.RECT)
          }
          ctx.beginPath()
          ctx.moveTo(item.x, item.y)
          if (index !== arr.length - 1) {
            ctx.lineTo(arr[index + 1].x, arr[index + 1].y)
            ctx.stroke()
          }
        })
      }
      break
  }

  ctx.restore()
  if (rect.children) {
    rect.children.map(v => renderCanvas(v, state, rect))
  }
}

export function renderRoundRect(rect: any, r: number, ctx: any,) {
  ctx.lineWidth = rect.lineWidth
  let {x, y, w, h} = rect
  ctx.beginPath()
  ctx.moveTo(x + w / 2, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w / 2, y, r)
  ctx.closePath()
  ctx.stroke()
}

export function drawRoundRect(ctx: CanvasRenderingContext2D, rect: any, r: number = 2, d: number = 4) {
  let {x, y, w = 2 * d, h = 2 * d, lineWidth = 2} = rect
  let ow = w / 2
  let oh = h / 2
  ctx.save()
  ctx.lineWidth = lineWidth
  ctx.translate(x, y)
  ctx.beginPath()
  ctx.moveTo(0, -oh)
  ctx.arcTo(ow, -oh, ow, oh, r)
  ctx.arcTo(ow, oh, -ow, oh, r)
  ctx.arcTo(-ow, oh, -ow, -oh, r)
  ctx.arcTo(-ow, -oh, 0, -oh, r)
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}

export function renderRound(rect: any, r: number, ctx: any, type: ShapeType = ShapeType.RECT) {
  let {x, y} = rect
  ctx.save()
  ctx.lineWidth = 1.5
  if (type === ShapeType.RECT) {
    ctx.fillStyle = Colors.Primary
  } else {
    ctx.strokeStyle = Colors.Primary
  }
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  if (type === ShapeType.RECT) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
  ctx.restore()
}

export function drawRound(ctx: any, rect: any, r: number = 4) {
  let d = 4
  let {x, y, w = 2 * d, h = 2 * d, lineWidth = 1.5} = rect
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = lineWidth
  ctx.fillStyle = Colors.White
  ctx.strokeStyle = Colors.Primary
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

export function drawCp(ctx: CanvasRenderingContext2D, rect: any, center: Point2) {
  let d = 3
  let {x, y, w = 2 * d, h = 2 * d, lineWidth = 1} = rect
  let ow = w / 2

  ctx.beginPath()
  ctx.moveTo2(rect)
  ctx.lineTo2(center)
  ctx.strokeStyle = Colors.Line2
  ctx.stroke()

  ctx.save()
  ctx.lineWidth = lineWidth
  ctx.fillStyle = Colors.White
  ctx.strokeStyle = Colors.Primary
  ctx.translate(x, y)
  ctx.rotate(jiaodu2hudu(45))
  ctx.beginPath()
  ctx.rect(-ow, -ow, w, h)
  ctx.fill()
  ctx.stroke()
  ctx.restore()

}

export function clearAll(state: IState) {
  clear({
    x: 0,
    y: 0,
    w: state.canvas.width,
    h: state.canvas.height
  }, state.ctx)
  // this.state.ctx.fillStyle = 'black'
  // this.state.ctx.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height)
}

export function clear(x: any, ctx: any) {
  ctx.clearRect(x.x, x.y, x.w, x.h)
}

export function getPath(rect: ShapeConfig | any, old?: any, parent?: any) {
  //根据老的config，计算出最新的rx,ry
  if (old) {
    // debugger
    rect.rx = old.rx - (old.x - rect.x)
    rect.ry = old.ry - (old.y - rect.y)
  }
  //根据父级，计算出自己的x,y
  if (parent) {
    rect.x = rect.rx + parent.x
    rect.y = rect.ry + parent.y
  }
  rect.leftX = rect.x
  rect.rightX = rect.leftX + rect.w
  rect.topY = rect.y
  rect.bottomY = rect.topY + rect.h
  rect.centerX = rect.x + rect.w / 2
  rect.centerY = rect.y + rect.h / 2

  rect.points = []

  if (!rect.id) {
    rect.id = uuid()
  }
  return rect
}

export function calcPosition(
  ctx: CanvasRenderingContext2D,
  config: any,
  original: any,
  status: any,
  parent?: any) {
  const {isHover, isSelect, enterL, enterLT} = status
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal, children,
    selected,
    rx, ry
  }
    = config
  if (parent) {
    x = rx + parent.x
    y = ry + parent.y
  }
// console.log('type,', type)
  let oldCenter: { x: number; y: number; }
  let currentCenter: { x: number; y: number; } = {
    x: x + (w / 2),
    y: y + (h / 2)
  }

  if (enterLT || enterL) {
    let s = original
    oldCenter = {
      x: s.x + (s.w / 2),
      y: s.y + (s.h / 2)
    }
    // console.log('oldCenter', oldCenter)
    // console.log('newCenter', newCenter)
  }

  ctx.lineWidth = lineWidth
  ctx.fillStyle = fillColor
  ctx.strokeStyle = borderColor

  let tranX = 0
  let tranY = 0
  let scaleX = 1
  let scaleY = 1
  if (rotate || flipHorizontal || flipVertical) {
    tranX = x + w / 2
    tranY = y + h / 2
    x = -w / 2
    y = -h / 2
  }

  if (flipHorizontal) {
    scaleX = -1
    // tranX = -tranX
    //如果在翻转情况下，拉伸要将tranX加上两个中心点偏移量
    if ((enterLT || enterL)) {
      // console.log('tranX1', tranX)
      let d = oldCenter!.x - currentCenter!.x
      tranX += d * 2
      // console.log('tranX2', tranX)
    }
  }
  if (flipVertical) {
    // console.log('flipVertical', flipVertical)
    scaleY = -1
    if ((enterLT || enterL)) {
      // console.log('tranX1', tranX)
      let d = oldCenter!.y - currentCenter!.y
      tranY += d * 2
      // console.log('tranX2', tranX)
    }
    // tranY = -tranY
  }

  // if (true) {
  if (false) {
    console.log('x, y', x, y)
    console.log('tranX, tranY', tranX, tranY)
    console.log('tranX, tranY', scaleX, scaleY)
    console.log('rotate', rotate)
  }

  ctx.translate(tranX, tranY)
  ctx.scale(scaleX, scaleY)
  ctx.rotate(rotate * Math.PI / 180)
  return {x, y}
}

export function hover(ctx: CanvasRenderingContext2D, config: any) {
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate,
    type, flipVertical, flipHorizontal, children,
  } = config
  let d = .5
  let hover: any = {}
  hover.lineWidth = 2
  hover.x = x - d
  hover.y = y - d
  hover.w = w + 2 * d
  hover.h = h + 2 * d
  if (radius) {
    renderRoundRect(hover, radius, ctx)
  } else {
    ctx.beginPath()
    ctx.moveTo(hover.x, hover.y)
    ctx.lineTo(hover.x + hover.w, hover.y);
    ctx.lineTo(hover.x + hover.w, hover.y + hover.h);
    ctx.lineTo(hover.x, hover.y + hover.h);
    ctx.lineTo(hover.x, hover.y);
    ctx.closePath()
    ctx.strokeStyle = borderColor
    ctx.stroke()
  }
  ctx.strokeStyle = 'rgb(139,80,255)'
  ctx.stroke()
}

export function selected(ctx: CanvasRenderingContext2D, config: any) {
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate,
    type, flipVertical, flipHorizontal, children,
  } = config
  ctx.strokeStyle = 'rgb(139,80,255)'

  if (radius) {
    renderRoundRect({x, y, w, h}, radius, ctx)
  }
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.closePath()
  ctx.stroke()
  let d = 4
  clear({
    x: x - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x + w - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x + w - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)

  let r = 3
  let lineWidth = 1.5
  renderRoundRect({
    x: x - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x + w - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x + w - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)

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
  let t = config
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
  // renderRound(endTop, r, ctx, ShapeType.SELECT)
  // renderRound(endBottom, r, ctx, ShapeType.SELECT)

  renderRound(topLeft, r2, ctx, ShapeType.SELECT)
  renderRound(topRight, r2, ctx, ShapeType.SELECT)
  renderRound(bottomLeft, r2, ctx, ShapeType.SELECT)
  renderRound(bottomRight, r2, ctx, ShapeType.SELECT)
  ctx.restore()
}

export function draw(
  ctx: CanvasRenderingContext2D,
  config: any,
  original: any,
  status?: {
    isHover: boolean,
    isSelect: boolean,
    isEdit: boolean,
    enterLT: boolean
    enterL: boolean
  },
  parent?: any
) {
  ctx.save()
  status = Object.assign({
    isHover: false,
    isSelect: false,
    isEdit: false,
    enterLT: false,
    enterL: false
  }, status || {})
  let {x, y} = calcPosition(ctx, config, original, status, parent)
  const {isHover, isSelect, isEdit, enterLT} = status
  let {
    w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal, children,
  } = config

  let a = w / 2, b = h / 2
  let ox = .55 * a
  let oy = .55 * b

  ctx.save();
  ctx.translate(x + a, y + b);
  // ctx.beginPath();
  ctx.moveTo(0, b);
  ctx.bezierCurveTo(ox, b, a, oy, a, 0);
  ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
  ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
  ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
  // ctx.closePath();
  ctx.stroke();
  ctx.restore();
  if (isHover) {
    hover(ctx, {...config, x, y})
  }
  if (isSelect) {
    selected(ctx, {...config, x, y})
  }
  config = getPath(config, null, parent)
}

export function draw2(
  ctx: CanvasRenderingContext2D,
  config: any,
  original: any,
  status?: {
    isHover: boolean,
    isSelect: boolean,
    isEdit: boolean,
    enterLT: boolean
    enterL: boolean
  },
  parent?: any
) {
  ctx.save()
  status = Object.assign({
    isHover: false,
    isSelect: false,
    isEdit: false,
    enterLT: false,
    enterL: false
  }, status || {})
  let {x, y} = calcPosition(ctx, config, original, status, parent)
  const {isHover, isSelect, isEdit, enterLT} = status
  let {
    w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal, children,
  } = config

  if (radius) {
    renderRoundRect({x, y, w, h}, radius, ctx)
  } else {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y);
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()
    ctx.strokeStyle = borderColor
    ctx.stroke()
  }

  if (isHover) {
    hover(ctx, {...config, x, y})
  }
  if (isSelect) {
    selected(ctx, {...config, x, y})
  }
  if (isEdit) {
    edit(ctx, {...config, x, y})
  }

  ctx.restore()

  // ctx.save()
  // let rect = this.config
  // ctx.fillStyle = 'gray'
  // ctx.font = `${rect.fontWeight} ${rect.fontSize}rem "${rect.fontFamily}", sans-serif`;
  // ctx.textBaseline = 'top'
  // ctx.fillText(rect.name, x, y - 18);
  // ctx.restore()

  config = getPath(config, null, parent)
}

export function draw3(
  ctx: CanvasRenderingContext2D,
  config: any,
  original: any,
  status?: {
    isHover: boolean,
    isSelect: boolean,
    isEdit: boolean,
    enterLT: boolean
    enterL: boolean
  },
  parent?: any
) {
  // ctx.save()
  status = Object.assign({
    isHover: false,
    isSelect: false,
    isEdit: false,
    enterLT: false,
    enterL: false
  }, status || {})
  let {x, y} = calcPosition(ctx, config, original, status, parent)
  const {isHover, isSelect, isEdit, enterLT} = status
  let {
    w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal, children,
  } = config

  switch (type) {
    case ShapeType.ELLIPSE:
      drawEllipse(ctx, {x, y, ...config})
      break
  }

  if (isHover) {
    hover(ctx, {...config, x, y})
  }
  if (isSelect) {
    selected(ctx, {...config, x, y})
  }
  if (isEdit) {
    edit(ctx, {...config, x, y})
  }

  // ctx.restore()

  // ctx.save()
  // let rect = this.config
  // ctx.fillStyle = 'gray'
  // ctx.font = `${rect.fontWeight} ${rect.fontSize}rem "${rect.fontFamily}", sans-serif`;
  // ctx.textBaseline = 'top'
  // ctx.fillText(rect.name, x, y - 18);
  // ctx.restore()

  config = getPath(config, null, parent)
}

function drawEllipse(
  ctx: CanvasRenderingContext2D,
  config: any,
) {
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate, lineWidth,
    type, flipVertical, flipHorizontal, children,
    totalLength
  } = config
  let w2 = w / 2, h2 = h / 2

  ctx.save();
  ctx.translate(x + w2, y + h2);
  if (totalLength === 4) {
    ctx.beginPath()
    ctx.ellipse(0, 0, w2, h2, jiaodu2hudu(0), 0, 2 * Math.PI); //倾斜 45°角
    ctx.closePath()
  } else {
    //http://www.alloyteam.com/2015/07/canvas-hua-tuo-yuan-di-fang-fa/
    //这里也可以用.5和.6来算ox和oy
    let ox = 0.5522848 * w2, oy = .5522848 * h2;

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

    //获取第几条曲线的所有控制点
    const getBezierControlPoint = (length: number) => {
      switch (length) {
        case 0:
          return [start, cp1, cp2, bottom]
        case 1:
          return [bottom, cp3, cp4, left]
        case 2:
          return [left, cp5, cp6, top]
        case 3:
          return [top, cp7, cp8, start]
      }
    }

    //渲染，整个圆时，所有的控制点
    let showCp = false
    if (showCp) {
      drawRound(ctx, start)
      drawRound(ctx, cp1)
      drawRound(ctx, bottom)
      drawRound(ctx, cp2)
      drawRound(ctx, cp3)
      drawRound(ctx, left)
      drawRound(ctx, cp4)
      drawRound(ctx, cp5)
      drawRound(ctx, top)
      drawRound(ctx, cp6)
      drawRound(ctx, cp7)
      drawRound(ctx, cp8)
    }

    ctx.beginPath()

    let bezierCps: BezierPoint[] = []
    // let totalLength = 3.5//总长度
    let totalPart = 8 //总份数
    if (Math.trunc(totalLength) === 1) totalPart = 4
    if (Math.trunc(totalLength) === 0) totalPart = 2
    if (totalLength === 4) {
      // ctx.ellipse(0, 0, w2, h2, jiaodu2hudu(0), 0, 2 * Math.PI); //倾斜 45°角
      // ctx.stroke();
      bezierCps.push({
        cp1: {...getDefaultPoint(true), ...cp8},
        center: {...getDefaultPoint(true), ...start},
        cp2: {...getDefaultPoint(true), ...cp1},
        type: BezierPointType.MirrorAngleAndLength
      })
      bezierCps.push({
        cp1: {...getDefaultPoint(true), ...cp2},
        center: {...getDefaultPoint(true), ...bottom},
        cp2: {...getDefaultPoint(true), ...cp3},
        type: BezierPointType.MirrorAngleAndLength
      })
      bezierCps.push({
        cp1: {...getDefaultPoint(true), ...cp4},
        center: {...getDefaultPoint(true), ...left},
        cp2: {...getDefaultPoint(true), ...cp5},
        type: BezierPointType.MirrorAngleAndLength
      })
      bezierCps.push({
        cp1: {...getDefaultPoint(true), ...cp6},
        center: {...getDefaultPoint(true), ...top},
        cp2: {...getDefaultPoint(true), ...cp7},
        type: BezierPointType.MirrorAngleAndLength
      })
      // ctx.ellipse(x,y,ox,oy)
    } else {
      let perPart = totalLength / totalPart
      // console.log('每一份', perPart)
      let currentPoint, lastPoint = start
      let bezierPrevious, bezierCurrent
      let length14Point, length34Point = null
      let intLastLength, intCurrentLength, lastLength = 0
      let currentLength = perPart
      // console.log('currentLength', currentLength, 'lastLength', lastLength)
      // drawRound(ctx, start)
      bezierCps.push({
        cp1: getDefaultPoint(),
        center: {
          use: true,
          x: start.x,
          y: start.y,
          px: 0,
          py: 0,
          rx: 0,
          ry: 0,
        },
        cp2: getDefaultPoint(),
        type: BezierPointType.NoMirror
      })
      for (let i = 1; i <= totalPart; i++) {
        intCurrentLength = Math.trunc(currentLength)
        intLastLength = Math.trunc(lastLength)

        //计算1/4，3/4长度
        let length14 = (lastLength + perPart * (1 / 4))
        let length34 = perPart * (2 / 4) + length14

        //默认情况下，用于计算1/4点，3/4点，可以共用一条对应的线段
        bezierCurrent = bezierPrevious = getBezierControlPoint(intCurrentLength)
        //计算当前点必须用当前长度线段的4个控制点来算
        currentPoint = getBezierPointByLength(getDecimal(currentLength), bezierCurrent)

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
        length14Point = getBezierPointByLength(getDecimal(length14), bezierPrevious)
        length34Point = getBezierPointByLength(getDecimal(length34), bezierCurrent)

        //利用1/4点、3/4点、起始点、终点，反推控制点
        let cps = getBezier3ControlPoints(length14Point, length34Point, lastPoint, currentPoint)

        // 因为最后一个控制点（非数组的最后一个点）默认只需center和cp1与前一个点的center和cp2的4个点，组成贝塞尔曲线
        //所以cp2是无用的，所以添加当前点时，需要把上一个点的cp2为正确的值并启用
        bezierCps[bezierCps.length - 1].cp2 = {
          use: true,
          x: cps[0].x,
          y: cps[0].y,
          px: 0,
          py: 0,
          rx: 0,
          ry: 0,
        }

        //默认不启用cp2，因为最后一个控制点，用不到
        bezierCps.push({
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
          cp2: getDefaultPoint(),
          type: BezierPointType.MirrorAngleAndLength
        })
        // ctx.beginPath()
        // ctx.moveTo(lastPoint.x, lastPoint.y)
        // ctx.bezierCurveTo2(cps[0], cps[1], currentPoint)
        // ctx.stroke()
        lastPoint = currentPoint
        lastLength = currentLength
        currentLength += perPart
      }

      bezierCps.push({
        cp1: getDefaultPoint(),
        center: getDefaultPoint(true),
        cp2: getDefaultPoint(),
        type: BezierPointType.RightAngle
      })
    }

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
          let cp: Point2
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
  }

  ctx.fillStyle = fillColor
  ctx.fill()
  ctx.strokeStyle = borderColor
  ctx.stroke();
  ctx.restore();
}

export function edit(ctx: CanvasRenderingContext2D, config: any) {
  let {
    x, y, w, h, radius,
    fillColor, borderColor, rotate,
    type, flipVertical, flipHorizontal, children,
  } = config
  ctx.strokeStyle = 'rgb(139,80,255)'

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.closePath()
  ctx.stroke()
  let d = 4
  clear({
    x: x - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x + w - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x + w - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)
  clear({
    x: x - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d
  }, ctx)

  let r = 3
  let lineWidth = 1.5
  renderRoundRect({
    x: x - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x + w - d,
    y: y - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x + w - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)
  renderRoundRect({
    x: x - d,
    y: y + h - d,
    w: 2 * d,
    h: 2 * d,
    lineWidth
  }, r, ctx)


  d = 40
  let r2 = 5
  let t = config
  let topLeft = {
    x: t.x + d,
    y: t.y + d,
  }
  renderRound(topLeft, r2, ctx, ShapeType.SELECT)
}

//P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
//x = (1−t)3x + 3(1−t)2tx +3(1−t)t2x + t3x
/**
 * @description 根据长度（即T）获取对应的点
 * */
export function getBezierPointByLength(t: number, points: any) {
  let [p1, p2, p3, p4] = points
  let x = Math.pow(1 - t, 3) * p1.x + 3 * Math.pow(1 - t, 2) * t * p2.x
    + 3 * (1 - t) * Math.pow(t, 2) * p3.x + Math.pow(t, 3) * p4.x
  let y = Math.pow(1 - t, 3) * p1.y + 3 * Math.pow(1 - t, 2) * t * p2.y
    + 3 * (1 - t) * Math.pow(t, 2) * p3.y + Math.pow(t, 3) * p4.y
  return {x, y}
}

//P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
//x = (1−t)3x + 3(1−t)2tx +3(1−t)t2x + t3x
/**
 * @description 根据长度（即T）获取对应的点
 * */
export function getLengthByBezierPoint(t: number, points: any) {
  let [p1, p2, p3, p4] = points
  let x = Math.pow(1 - t, 3) * p1.x + 3 * Math.pow(1 - t, 2) * t * p2.x
    + 3 * (1 - t) * Math.pow(t, 2) * p3.x + Math.pow(t, 3) * p4.x
  let y = Math.pow(1 - t, 3) * p1.y + 3 * Math.pow(1 - t, 2) * t * p2.y
    + 3 * (1 - t) * Math.pow(t, 2) * p3.y + Math.pow(t, 3) * p4.y
  return {x, y}
}


//采用https://juejin.cn/post/6995482699037147166#heading-13
//t取的1/4和3/4，算的结果较为精准
//同样的曲线，t取的1/4和3/4的结果，比t取的1/3和2/3的结果，没有小数点
//文章最后那里写错了
// 将公式(5)和公式(6)代入化简可得：这步应该是
// P1 =(3Pc − Pd )/72
// P2 =(3Pd − Pc )/72
/**
 * @description 获取指定一段贝塞尔曲线上的两个控制点
 * @param tp1 线段上1/4的点
 * @param tp2 线段上3/4的点
 * @param start 起始点
 * @param end 终点
 * */
export function getBezier3ControlPoints(tp1: any, tp2: any, start: any, end: any) {
  let xb = 64 * tp1.x - 27 * start.x - end.x
  let yb = 64 * tp1.y - 27 * start.y - end.y
  let xc = 64 * tp2.x - start.x - 27 * end.x
  let yc = 64 * tp2.y - start.y - 27 * end.y

  let x1 = (3 * xb - xc) / 72
  let y1 = (3 * yb - yc) / 72
  let x2 = (3 * xc - xb) / 72
  let y2 = (3 * yc - yb) / 72
  return [{x: x1, y: y1}, {x: x2, y: y2}]
}


//取小数部分
export function getDecimal(num: number) {
  return num - Math.trunc(num);
}


export function con(val: any) {
  console.log(JSON.stringify(val, null, 2))
}

//网上找的牛顿法,解一元三次方程。也算不出来正确的值
//https://www.zhihu.com/question/30570430
function test(xTarget: any, cp1: any, cp2: any) {
  let {x: x1, y: y1} = cp1
  let {x: x2, y: y2} = cp2
  var tolerance = 0.00001,
    t0 = 0.6,
    x = 3 * (1 - t0) * (1 - t0) * t0 * x1 + 3 * (1 - t0) * t0 * t0 * x2 + t0 * t0 * t0,
    t;
  while (Math.abs(x - xTarget) > tolerance) {
    t = t0 - (3 * (1 - t0) * (1 - t0) * t0 * x1 + 3 * (1 - t0) * t0 * t0 * x2 + t0 * t0 * t0 - xTarget) /
      (3 * (1 - t0) * (1 - t0) * x1 + 6 * (1 - t0) * t0 * (x2 - x1) + 3 * t0 * t0 * (1 - x2));
    t0 = t;
    x = 3 * (1 - t0) * (1 - t0) * t0 * x1 + 3 * (1 - t0) * t0 * t0 * x2 + t0 * t0 * t0;
  }
  //return 3*(1-t)*(1-t)*t*y1 + 3*(1-t)*t*t*y2 + t*t*t;//这个是返回与x对应的y值

  return t;
};

function pow(v: number, v2: number) {
  return Math.pow(v, v2)
}

function cuberoot(x: any) {
  var y = Math.pow(Math.abs(x), 1 / 3);
  return x < 0 ? -y : y;
}

//网上找的，解一元三次方程
export function solveCubic(a: number, b: number, c: number, d: number) {
  // console.log(arguments)
  if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
    a = b;
    b = c;
    c = d;
    if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
      a = b;
      b = c;
      if (Math.abs(a) < 1e-8) // Degenerate case
        return [];
      return [-b / a];
    }

    var D = b * b - 4 * a * c;
    if (Math.abs(D) < 1e-8)
      return [-b / (2 * a)];
    else if (D > 0)
      return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    return [];
  }

  // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
  var p = (3 * a * c - b * b) / (3 * a * a);
  var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
  var roots;

  if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
    roots = [cuberoot(-q)];
  } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
    roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
  } else {
    var D = q * q / 4 + p * p * p / 27;
    if (Math.abs(D) < 1e-8) {       // D = 0 -> two roots
      roots = [-1.5 * q / p, 3 * q / p];
    } else if (D > 0) {             // Only one real root
      var u = cuberoot(-q / 2 - Math.sqrt(D));
      roots = [u - p / (3 * u)];
    } else {                        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
      var u = 2 * Math.sqrt(-p / 3);
      var t = Math.acos(3 * q / p / u) / 3;  // D < 0 implies p < 0 and acos argument in [-1..1]
      var k = 2 * Math.PI / 3;
      roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
    }
  }

  // Convert back from depressed cubic
  for (var i = 0; i < roots.length; i++)
    roots[i] -= b / (3 * a);

  return roots;
}

//自己根据wiki写的，解一元三次方程.解出来是NaN。有问题，先不研究了
function MySolveCubic(a: number, b: number, c: number, d: number) {
  console.log(arguments)
  let one = (
    ((b * c) /
      (6 * Math.pow(a, 2)))
    -
    (Math.pow(b, 3) /
      (27 * Math.pow(a, 3)))
    -
    (d / (2 * a))
  )
  let two = (
    (c / (3 * a))
    -
    (Math.pow(b, 2) / (9 * Math.pow(a, 2)))
  )
  let w = Math.pow(one, 2) + Math.pow(two, 3)

  console.log('w', w)

  // let w2 =
  one = 36 * a * b * c
    - 8 * pow(b, 3)
    - 108 * pow(a, 2) * d

  two = 12 * a * c - 4 * pow(b, 2)

  w = Math.pow(one, 2) + Math.pow(two, 3)

  let r2 = (
    -2 * b
    +
    Math.cbrt(
      one
      +
      Math.sqrt(w)
    )
    +
    Math.cbrt(
      one
      -
      Math.sqrt(w)
    )
  ) / (6 * a)

  console.log('r', r2)

  let
    r = -(b / (3 * a))
      +
      Math.cbrt(
        one
        +
        Math.sqrt(w)
      )
      +
      Math.cbrt(
        one
        -
        Math.sqrt(w)
      )

  // console.log('r', r)

  // return -2 * b + (
  // )
}