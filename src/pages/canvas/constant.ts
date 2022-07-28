import {FontFamily, FontWeight, RectType, TextAlign, TextBaseline, TextMode} from "./type";

export const fontFamilies = [
  {
    label: '思源黑体',
    value: FontFamily.SourceHanSansCN,
  },
  {
    label: '思源宋体',
    value: FontFamily.SourceHanSerifCN,
  }
]
export const fontWeight = [
  {label: 'Light', value: FontWeight.LIGHT,},
  {label: 'Regular', value: FontWeight.REGULAR,},
  {label: 'Normal', value: FontWeight.Normal},
  {label: 'Medium', value: FontWeight.MEDIUM},
  {label: 'Bold', value: FontWeight.BOLD,},
  {label: 'Heavy', value: FontWeight.HEAVY,},
]

export const fontSize = [
  {label: '10', value: 10,},
  {label: '12', value: 12,},
  {label: '14', value: 14,},
  {label: '16', value: 16,},
  {label: '18', value: 18,},
  {label: '20', value: 20,},
  {label: '24', value: 24,},
  {label: '32', value: 32,},
  {label: '36', value: 36,},
  {label: '40', value: 40,},
  {label: '48', value: 48,},
  {label: '64', value: 64,},
  {label: '96', value: 96,},
  {label: '128', value: 128,},
  {label: '256', value: 256,},
]

export const Colors = {
  primary: '#4B75F6FF',
  line: 'rgb(216,216,216)'

}
export const rects = [
  {
    name: 'oneBox',
    borderColor: "white",
    fillColor: "white",
    x: 550,
    y: 250,
    w: 350,
    h: 100,
    rotate: 10,
    lineWidth: 2,
    flipHorizontal: true,
    type: RectType.LINE,
    color: 'gray',
    radius: 0,
    children: []
  },
  {
    brokenTexts: [],
    borderColor: "white",
    fillColor: "white",
    fontSize: 0,
    texts: [],
    name: 'oneBox3',
    x: 226,
    y: 226,
    w: 150,
    h: 150,
    rotate: 0,
    lineWidth: 2,
    type: RectType.LINE,
    color: 'gray',
    radius: 30,
    children: []
  },
  {
    borderColor: "", fillColor: "",
    textAlign: TextAlign.RIGHT,
    textBaseline: TextBaseline.LEFT,
    name: 'text',
    texts: ['输入文本'],
    brokenTexts: ['输入文本'],
    x: 540,
    y: 120,
    w: 80,
    h: 25,
    fontFamily: FontFamily.SourceHanSansCN,
    fontWeight: FontWeight.Normal,
    letterSpacing: 0,
    textLineHeight: 20,
    textMode: TextMode.AUTO_H,
    rotate: 0,
    lineWidth: 2,
    fontSize: 20,
    type: RectType.TEXT,
    color: 'gray',
    radius: 0,
    children: []
  },
  {
    img: '../../assets/image/a.jpg',
    brokenTexts: [],
    borderColor: "black",
    fillColor: "black",
    fontSize: 0,
    texts: [],
    x: 326,
    y: 326,
    w: 150,
    h: 150,
    rotate: 0,
    lineWidth: 2,
    type: RectType.IMG,
    color: 'gray',
    radius: 0,
    children: [],
    name: 'img',
  },
  {
    borderColor: Colors.line,
    fillColor: "black",
    fontSize: 0,
    texts: [],
    x: 326,
    y: 326,
    w: 150,
    h: 150,
    rotate: 0,
    lineWidth: 2,
    type: RectType.PEN,
    radius: 0,
    points: [{x: 800, y: 100}, {x: 1200, y: 300}, {x: 1100, y: 400}],
    children: [],
    name: 'PENCIL',
  },
  {
    borderColor: Colors.line,
    fillColor: "black",
    fontSize: 0,
    texts: [],
    x: 326,
    y: 326,
    w: 150,
    h: 150,
    rotate: 0,
    lineWidth: 2,
    type: RectType.PEN,
    radius: 0,
    points: [{x: 800, y: 200}],
    children: [],
    name: 'PENCIL',
  }
]