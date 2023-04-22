export type IState = {
  rectList: Rect[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  canvasRect: DOMRect,
  enter: boolean,
  hoverLeft: boolean,
  enterLeft: boolean,
  hoverLT: boolean,
  enterLT: boolean,
  hoverRT: boolean,
  enterRT: boolean,
  hoverLTR: boolean,//左上角 旋转
  enterLTR: boolean,
  selectRect?: Rect,
  startX: number,
  startY: number,
  offsetX: number,
  offsetY: number,
  handMove: {
    x: number,
    y: number,
  },
  oldHandMove: {
    x: number,
    y: number,
  },
  currentPoint: {
    x: number,
    y: number,
  },
  handScale: number,
  oldHandScale: number,
  sPoint: { x: number, y: number },
  activeHand: boolean,
  fps: number,
  currentMat: any
  rectColor: any
  rectColorType: any
  showPicker: boolean,
  usePencil: boolean,
  enterPencil: boolean,
  usePen: boolean,
  enterPen: boolean,
  isEdit: boolean,

  drawType: RectType
}


export enum RectType {
  RECT = 0,
  SELECT = 3,
  TEXT = 4,
  IMG = 5,
  PENCIL = 6,
  PEN = 7,
  ROUND = 8,
  STAR = 9,
  POLYGON = 10,

  FRAME = 100,
  COMPONENT = 101,
  HOVER = 2,
}

export interface RectImg {
  img: any,
}

export interface Rect extends RectText, RectImg {
  id: number | string,
  name?: number | string,
  x: number,
  y: number,
  w: number,
  h: number,
  rotate: number,
  lineWidth: number,
  type: RectType,
  color: string,
  fillColor: string,
  borderColor: string,
  leftX?: number,
  topY?: number,
  rightX?: number,
  bottomY?: number,
  radius: number,
  children: Rect[],
  flipVertical?: boolean,
  flipHorizontal?: boolean,
  points?: any[]
}

export enum TextMode {
  AUTO_W = 1,//宽度不固定，随一行文字的长度增长。高度换行自动调整高度
  AUTO_H = 2,//宽度固定，高度随总行数自动调整
  FIXED = 3,//固定宽高
}

export enum TextBaseline {
  LEFT = 1,
  RIGHT = 2,
  CENTER = 3,
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum FontWeight {
  LIGHT = 300,
  REGULAR = 400,
  Normal = 500,
  MEDIUM = 600,
  BOLD = 700,
  HEAVY = 900,
}

export enum RectColorType {
  FillColor = 'fillColor',
  BorderColor = 'borderColor',
}

export enum FontFamily {
  SourceHanSerifCN = 'SourceHanSerifCN',
  SourceHanSansCN = 'SourceHanSansCN',
}

export interface RectText {
  brokenTexts: string[],
  texts: string[],
  textLineHeight: number,
  letterSpacing: number,
  textMode: TextMode,
  textBaseline: TextBaseline,
  textAlign: TextAlign,
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  fontSize: number,
}