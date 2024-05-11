import {FontWeight, P, ShapeType, StrokeAlign, TextMode} from "../types/type"
import {FontFamily, TextAlign} from "../config/TextConfig"
import {getPenPoint, HandleMirroring, PenConfig} from "../config/PenConfig"
import helper from "./helper";
import {BaseConfig} from "../config/BaseConfig";

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
  Primary: '#4B75F6FF',
  Hover_Line: 'rgb(135,160,236)',
  Select: 'rgba(75,117,246,0.1)',
  Line: 'rgb(217,217,217)',
  Line2: 'rgb(140,140,140)',
  FillColor: 'rgb(241,238,238)',
  Border: 'rgb(140,140,140)',
  White: 'white',
  Transparent: 'transparent',
}

const defaultCurrentMat = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
]
const defaultHandMove = {x: 0, y: 0}
export const defaultConfig = {
  // handScale: 3.0517578125,
  // handMove: {x: -1201.48828125, y: -872.4208984375},
  // currentMat: [3.0517578125, 0, 0, 0, 0, 3.0517578125, 0, 0, 0, 0, 1, 0, -1201.48828125, -872.4208984375, 0, 1],
  // handScale: 14.31452465057373,
  // handMove: {x: -6445.2578125, y: -3923.02783203125},
  // currentMat: [14.31452465057373, 0, 0, 0, 0, 14.31452465057373, 0, 0, 0, 0, 1, 0, -6445.2578125, -3923.02783203125, 0, 1],
  handScale: 1,
  currentMat: defaultCurrentMat,
  handMove: defaultHandMove,
  shapes: [],
  lineWidth: 1.5,
  strokeStyle: Colors.Primary,
  fillStyle: Colors.FillColor
}

export const r = [
  {
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER",
    "color": "gray",
    "radius": 0,
    "children": [],
    "brokenTexts": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "rgb(48,48,48)",
    "fontSize": 16,
    "fontWeight": 500,
    "fontFamily": "SourceHanSansCN",
    "texts": [],
    "name": "直尺-横",
    "flipHorizontal": false,
    "flipVertical": false,
    "nameWidth": 61.787109375,
    "data": {
      "direction": "horizontal"
    },
    "id": "14c8a103-bcdb-4b28-92c9-80fb0bc0d5d5",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 0,
      "y": 0
    },
    "original": {
      "x": 0,
      "y": 0
    },
    "center": {
      "x": 0,
      "y": 0
    },
    "topLeft": {
      "x": 0,
      "y": 0
    },
    "topRight": {
      "x": 0,
      "y": 0
    },
    "bottomLeft": {
      "x": 0,
      "y": 0
    },
    "bottomRight": {
      "x": 0,
      "y": 0
    },
    "box": {
      "leftX": 0,
      "rightX": 0,
      "topY": 0,
      "bottomY": 0
    }
  },
  {
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER",
    "color": "gray",
    "radius": 0,
    "children": [],
    "brokenTexts": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "rgb(48,48,48)",
    "fontSize": 16,
    "fontWeight": 500,
    "fontFamily": "SourceHanSansCN",
    "texts": [],
    "data": {
      "direction": "vertical"
    },
    "name": "直尺-竖",
    "flipHorizontal": false,
    "flipVertical": false,
    "nameWidth": 61.787109375,
    "id": "a3bf6f0e-e3f5-4553-845f-7ce6e0fdbe76",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 0,
      "y": 0
    },
    "original": {
      "x": 0,
      "y": 0
    },
    "center": {
      "x": 0,
      "y": 0
    },
    "topLeft": {
      "x": 0,
      "y": 0
    },
    "topRight": {
      "x": 0,
      "y": 0
    },
    "bottomLeft": {
      "x": 0,
      "y": 0
    },
    "bottomRight": {
      "x": 0,
      "y": 0
    },
    "box": {
      "leftX": 0,
      "rightX": 0,
      "topY": 0,
      "bottomY": 0
    }
  },
  {
    "name": "容器",
    "x": 146.2634901753852,
    "y": 137.62670925627543,
    "w": 400,
    "h": 200,
    "rotation": 20,
    "lineWidth": 2,
    "type": "FRAME",
    "color": "gray",
    "radius": 0,
    "children": [
      {
        children: [
          {
            "x": 0,
            "y": 0,
            "w": 100,
            "h": 50,
            "rotation": 0,
            "lineWidth": 2,
            "type": "RECTANGLE",
            "radius": 0,
            "brokenTexts": [],
            "borderColor": "rgb(216,216,216)",
            "fillColor": "rgb(216,216,216)",
            "fontSize": 16,
            "fontWeight": 500,
            "fontFamily": "SourceHanSansCN",
            "texts": [],
            "name": "矩形",
            "leftX": 1396.6517760479487,
            "rightX": 1523.9908970134784,
            "topY": 107.21652274196168,
            "bottomY": 257.2165227419617,
            "points": [],
            "center": {
              "x": 234.2215165449864,
              "y": 276.05858996720315
            },
            "topLeft": {
              "x": 180.98513393363953,
              "y": 177.74334411764897
            },
            "topRight": {
              "x": 344.8155427914379,
              "y": 292.4586313878582
            },
            "bottomLeft": {
              "x": 123.62749029853492,
              "y": 259.65854854654816
            },
            "bottomRight": {
              "x": 287.45789915633327,
              "y": 374.3738358167574
            },
            "flipHorizontal": false,
            "flipVertical": false,
            "nameWidth": 36,
            "percent": {
              "x": 0.075,
              "y": 0.25
            },
            "absolute": {
              "x": 180.98513393363953,
              "y": 177.74334411764897
            },
            "original": {
              "x": 134.22151654498643,
              "y": 226.05858996720315
            },
            "box": {
              "leftX": 134.2215165449864,
              "rightX": 334.2215165449864,
              "topY": 226.05858996720315,
              "bottomY": 326.05858996720315
            },
          }
        ],
        "x": 46.34836962621918,
        "y": 25.82180417529449,
        "w": 200,
        "h": 100,
        "rotation": 15,
        "lineWidth": 2,
        "type": "FRAME",
        "color": "gray",
        "radius": 0,
        "brokenTexts": [],
        "borderColor": "rgb(216,216,216)",
        "fillColor": "rgb(199,145,145)",
        "fontSize": 16,
        "fontWeight": 500,
        "fontFamily": "SourceHanSansCN",
        "texts": [],
        "name": "容器1",
        "points": [],
        "center": {
          "x": 234.2215165449864,
          "y": 276.05858996720315
        },
        "topLeft": {
          "x": 180.98513393363953,
          "y": 177.74334411764897
        },
        "topRight": {
          "x": 344.8155427914379,
          "y": 292.4586313878582
        },
        "bottomLeft": {
          "x": 123.62749029853492,
          "y": 259.65854854654816
        },
        "bottomRight": {
          "x": 287.45789915633327,
          "y": 374.3738358167574
        },
        "flipHorizontal": false,
        "flipVertical": false,
        "nameWidth": 40,
        "percent": {
          "x": 0.075,
          "y": 0.25
        },
        "absolute": {
          "x": 180.98513393363953,
          "y": 177.74334411764897
        },
        "original": {
          "x": 134.22151654498643,
          "y": 226.05858996720315
        },
        "box": {
          "leftX": 134.2215165449864,
          "rightX": 334.2215165449864,
          "topY": 226.05858996720315,
          "bottomY": 326.05858996720315
        },
        "id": "bf820ba9-f8b4-4c28-b1c8-3b7536220dec"
      }
    ],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "white",
    "center": {
      "x": 300,
      "y": 300
    },
    "leftX": 486,
    "rightX": 898,
    "topY": 72,
    "bottomY": 516,
    "topLeft": {
      "x": 146.2634901753852,
      "y": 137.62670925627543
    },
    "topRight": {
      "x": 522.1405384897486,
      "y": 274.4347665865429
    },
    "bottomLeft": {
      "x": 77.85946151025144,
      "y": 325.5652334134571
    },
    "bottomRight": {
      "x": 453.7365098246148,
      "y": 462.37329074372457
    },
    "nameWidth": 36,
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 146.2634901753852,
      "y": 137.62670925627543
    },
    "original": {
      "x": 100,
      "y": 200
    },
    "box": {
      "leftX": 100,
      "rightX": 500,
      "topY": 200,
      "bottomY": 400
    },
    "id": "7a0272a8-b433-464d-a09b-37c21e15fd0d"
  },
  {
    "x": 233,
    "y": 0,
    "w": 0,
    "h": 20,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER_LINE",
    "radius": 0,
    "children": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "red",
    "data": {
      "direction": "vertical"
    },
    "nameWidth": 87.7587890625,
    "id": "642f8440-e8f5-479c-9771-615c14784ce7",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 233,
      "y": 0
    },
    "original": {
      "x": 233,
      "y": 0
    },
    "center": {
      "x": 233,
      "y": 10
    },
    "topLeft": {
      "x": 233,
      "y": 0
    },
    "topRight": {
      "x": 233,
      "y": 0
    },
    "bottomLeft": {
      "x": 233,
      "y": 20
    },
    "bottomRight": {
      "x": 233,
      "y": 20
    },
    "box": {
      "leftX": 233,
      "rightX": 233,
      "topY": 0,
      "bottomY": 20
    }
  },
  {
    "x": 299,
    "y": 0,
    "w": 0,
    "h": 20,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER_LINE",
    "radius": 0,
    "children": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "red",
    "data": {
      "direction": "vertical"
    },
    "nameWidth": 87.7587890625,
    "id": "54470592-43ba-4691-90f9-fcd71e14d392",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 299,
      "y": 0
    },
    "original": {
      "x": 299,
      "y": 0
    },
    "center": {
      "x": 299,
      "y": 10
    },
    "topLeft": {
      "x": 299,
      "y": 0
    },
    "topRight": {
      "x": 299,
      "y": 0
    },
    "bottomLeft": {
      "x": 299,
      "y": 20
    },
    "bottomRight": {
      "x": 299,
      "y": 20
    },
    "box": {
      "leftX": 299,
      "rightX": 299,
      "topY": 0,
      "bottomY": 20
    }
  },
  {
    "x": 0,
    "y": 177,
    "w": 0,
    "h": 20,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER_LINE",
    "radius": 0,
    "children": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "red",
    "data": {
      "direction": "horizontal"
    },
    "nameWidth": 87.7587890625,
    "id": "350296d6-2452-4287-9a2a-f3c5197014a0",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 0,
      "y": 177
    },
    "original": {
      "x": 0,
      "y": 177
    },
    "center": {
      "x": 0,
      "y": 187
    },
    "topLeft": {
      "x": 0,
      "y": 177
    },
    "topRight": {
      "x": 0,
      "y": 177
    },
    "bottomLeft": {
      "x": 0,
      "y": 197
    },
    "bottomRight": {
      "x": 0,
      "y": 197
    },
    "box": {
      "leftX": 0,
      "rightX": 0,
      "topY": 177,
      "bottomY": 197
    }
  },
  {
    "x": 287,
    "y": 0,
    "w": 0,
    "h": 20,
    "rotation": 0,
    "lineWidth": 2,
    "type": "RULER_LINE",
    "radius": 0,
    "children": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "red",
    "data": {
      "direction": "vertical"
    },
    "nameWidth": 87.7587890625,
    "id": "0f15a57d-4186-4c25-99ee-60fe8dbcffbe",
    "percent": {
      "x": 0,
      "y": 0
    },
    "absolute": {
      "x": 287,
      "y": 0
    },
    "original": {
      "x": 287,
      "y": 0
    },
    "center": {
      "x": 287,
      "y": 10
    },
    "topLeft": {
      "x": 287,
      "y": 0
    },
    "topRight": {
      "x": 287,
      "y": 0
    },
    "bottomLeft": {
      "x": 287,
      "y": 20
    },
    "bottomRight": {
      "x": 287,
      "y": 20
    },
    "box": {
      "leftX": 287,
      "rightX": 287,
      "topY": 0,
      "bottomY": 20
    }
  }
]
const rule = [
  {
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotation": 0,
    "lineWidth": 2,
    "type": ShapeType.RULER,
    "color": "gray",
    "radius": 0,
    "children": [],
    "brokenTexts": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "rgb(48,48,48)",
    "fontSize": 16,
    "fontWeight": 500,
    "fontFamily": "SourceHanSansCN",
    "texts": [],
    "name": "直尺-横",
    "flipHorizontal": false,
    "flipVertical": false,
    "nameWidth": 36,
    data: {
      direction: 'horizontal'
    }
  },
  {
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotation": 0,
    "lineWidth": 2,
    "type": ShapeType.RULER,
    "color": "gray",
    "radius": 0,
    "children": [],
    "brokenTexts": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "rgb(48,48,48)",
    "fontSize": 16,
    "fontWeight": 500,
    "fontFamily": "SourceHanSansCN",
    "texts": [],
    data: {
      direction: 'vertical'
    },
    "name": "直尺-竖",
    "flipHorizontal": false,
    "flipVertical": false,
    "nameWidth": 36,
  },
]
let temp = {
  "name": "容器2-1",
  layout: {
    "x": 300,
    "y": 20,
    "w": 250,
    "h": 200,
  },
  "rotation": 0,
  "lineWidth": 2,
  "type": ShapeType.RECTANGLE,
  "color": "gray",
  "radius": 0,
  children: [],
  "borderColor": "rgb(216,216,216)",
  "fillColor": "rgb(241,238,238)",
  flipHorizontal: false,
  flipVertical: false
}
export const rects: any[] = [
  {
    use: false,
    "name": "矩形",
    "layout": {
      "x": 250,
      "y": 200,
      "w": 400,
      "h": 200
    },
    "rotation": 0,
    "lineWidth": 2,
    "type": "PEN",
    "radius": 0,
    "children": [],
    "borderColor": "rgb(0,0,0)",
    "fillColor": "#4C4C4C",
    "flipHorizontal": false,
    "flipVertical": false,
    "isComplete": true,
    "isCustom": true,
    "cornerRadius": 0,
    "realCornerRadius": 0,
    "penNetwork": {
      "ctrlNodes": [],
      "nodes": [
        {
          "x": -200,
          "y": -100,
          "cornerRadius": 100,
          "realCornerRadius": 100,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 200,
          "y": -100,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 200,
          "y": 100,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -200,
          "y": 100,
          "cornerRadius": 50,
          "realCornerRadius": 50,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
      ],
      "paths": [
        [0, 1, -1, -1, 1],
        [1, 2, -1, -1, 1],
        [2, 3, -1, -1, 1],
        [3, 0, -1, -1, 1],
      ],
      "regions": []
    },
    "percent": {
      "x": 0,
      "y": 0
    },
    "relativeCenter": {
      "x": 0,
      "y": 0
    },
    "realRotation": 0,
    "start": {
      "x": 700,
      "y": 100
    },
    "absolute": {
      "x": 250.05088174397093,
      "y": 187.15896142420058
    },
    "original": {
      "x": 250.05088174397093,
      "y": 187.15896142420058
    },
    "center": {
      "x": 461.02544087198544,
      "y": 282.0794807121003
    },
    "box": {
      "leftX": 250.05088174397093,
      "rightX": 672,
      "topY": 187.15896142420058,
      "bottomY": 377,
      "topLeft": {
        "x": 250.05088174397093,
        "y": 187.15896142420058
      },
      "topRight": {
        "x": 672,
        "y": 187.15896142420058
      },
      "bottomLeft": {
        "x": 250.05088174397093,
        "y": 377
      },
      "bottomRight": {
        "x": 672,
        "y": 377
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": [],
  },
  helper.getDefaultShapeConfig({
    use: false,
    "layout": {
      "x": 174,
      "y": 29,
      "w": 359,
      "h": 148
    },
    name: 'Pen',
    "fillColor": "#4C4C4C",
    type: ShapeType.PEN,
    isCustom: true,
    penNetwork: {
      regions: [],
      nodes: [
        getPenPoint({x: 0, y: 0}),
        getPenPoint({x: 0, y: 150}),
        getPenPoint({x: 100, y: 50}),
        getPenPoint({x: -150, y: 50}),
        getPenPoint({x: 50, y: 250}),
        getPenPoint({x: 50, y: 70}),
        getPenPoint({x: 250, y: 50}),
        getPenPoint({x: 250, y: 200}),
        getPenPoint({x: 350, y: 200}),
        getPenPoint({x: 150, y: 100}),
      ],
      ctrlNodes: [],
      paths: [
        [0, 1, -1, -1, 1],
        [2, 1, -1, -1, 1],
        [2, 3, -1, -1, 1],
        [4, 3, -1, -1, 1],
        [4, 5, -1, -1, 1],
        [6, 7, -1, -1, 1],
        [8, 7, -1, -1, 1],
        [8, 9, -1, -1, 1],
      ]
    },
  } as any),
  helper.getDefaultShapeConfig({
    use: false,
    "layout": {
      "x": 174,
      "y": 29,
      "w": 359,
      "h": 148
    },
    name: 'Pen',
    "fillColor": "#4C4C4C",
    type: ShapeType.PEN,
    isCustom: true,
    penNetwork: {
      regions: [],
      nodes: [
        getPenPoint({x: 0, y: 0}),
        // getPenPoint({x: 110, y: 150}),
      ],
      ctrlNodes: [],
      paths: [
        // [0, 1, -1, -1, 1]
      ]
    },
  } as any),
  {
    "lineWidth": 1.5,
    "fillColor": "rgb(58,58,58)",
    "borderColor": "rgb(140,140,140)",
    "children": [],
    "flipHorizontal": false,
    "flipVertical": false,
    "radius": 0,
    "lineShapes": [],
    "cacheLineShapes": [],
    "commonPoints": [],
    "rotation": 0,
    "layout": {
      "x": 685,
      "y": 23,
      "w": 494,
      "h": 315
    },
    "isCustom": true,
    "isVisible": false,
    "isLocked": false,
    "cornerSmooth": 0,
    "cornerRadius": 0,
    "topLeftRadius": 0,
    "topRightRadius": 0,
    "bottomLeftRadius": 0,
    "bottomRightRadius": 0,
    "opacity": 0,
    "blendMode": 0,
    "isMask": false,
    "effects": [],
    "isCache": true,
    "isPointOrLine": false,
    "penNetwork": {
      "ctrlNodes": [],
      "paths": [
        [
          0,
          1,
          -1,
          -1,
          1
        ],
        [
          1,
          2,
          -1,
          -1,
          1
        ],
        [
          2,
          3,
          -1,
          -1,
          1
        ],
        [
          3,
          4,
          -1,
          -1,
          1
        ],
        [
          4,
          5,
          -1,
          -1,
          1
        ],
        [
          3,
          1,
          -1,
          -1,
          1
        ],
        [
          1,
          6,
          -1,
          -1,
          1
        ],
        [
          6,
          7,
          -1,
          -1,
          1
        ],
        [
          7,
          8,
          -1,
          -1,
          1
        ],
        [
          5,
          9,
          -1,
          -1,
          1
        ],
        [
          9,
          10,
          -1,
          -1,
          1
        ],
        [
          0,
          11,
          -1,
          -1,
          1
        ],
        [
          11,
          12,
          -1,
          -1,
          1
        ]
      ],
      "nodes": [
        {
          "x": -127.5,
          "y": -47,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 125,
          "y": -39.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -119,
          "y": 157.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 18,
          "y": -157.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 71,
          "y": 149.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -114,
          "y": -103.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 247,
          "y": -93.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 199,
          "y": 5.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 165,
          "y": -105.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -206,
          "y": -138.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -220,
          "y": -82.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -236,
          "y": -41.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -247,
          "y": 44.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        }
      ],
      "regions": []
    },
    "cache": {
      "ctrlNodes": [],
      "paths": [
        [
          0,
          15,
          -1,
          -1,
          1
        ],
        [
          13,
          15,
          -1,
          -1,
          1
        ],
        [
          13,
          14,
          -1,
          -1,
          1
        ],
        [
          1,
          14,
          -1,
          -1,
          1
        ],
        [
          16,
          1,
          -1,
          -1,
          1
        ],
        [
          16,
          17,
          -1,
          -1,
          1
        ],
        [
          2,
          17,
          -1,
          -1,
          1
        ],
        [
          18,
          2,
          -1,
          -1,
          1
        ],
        [
          18,
          13,
          -1,
          -1,
          1
        ],
        [
          3,
          13,
          -1,
          -1,
          1
        ],
        [
          3,
          14,
          -1,
          -1,
          1
        ],
        [
          16,
          14,
          -1,
          -1,
          1
        ],
        [
          4,
          16,
          -1,
          -1,
          1
        ],
        [
          17,
          4,
          -1,
          -1,
          1
        ],
        [
          17,
          18,
          -1,
          -1,
          1
        ],
        [
          15,
          18,
          -1,
          -1,
          1
        ],
        [
          15,
          5,
          -1,
          -1,
          1
        ],
        [
          1,
          3,
          -1,
          -1,
          1
        ],
        [
          1,
          19,
          -1,
          -1,
          1
        ],
        [
          6,
          19,
          -1,
          -1,
          1
        ],
        [
          7,
          6,
          -1,
          -1,
          1
        ],
        [
          19,
          7,
          -1,
          -1,
          1
        ],
        [
          19,
          8,
          -1,
          -1,
          1
        ],
        [
          5,
          9,
          -1,
          -1,
          1
        ],
        [
          9,
          10,
          -1,
          -1,
          1
        ],
        [
          0,
          11,
          -1,
          -1,
          1
        ],
        [
          11,
          12,
          -1,
          -1,
          1
        ]
      ],
      "nodes": [
        {
          "x": -127.5,
          "y": -47,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 125,
          "y": -39.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -119,
          "y": 157.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 18,
          "y": -157.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 71,
          "y": 149.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -114,
          "y": -103.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 247,
          "y": -93.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 199,
          "y": 5.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 165,
          "y": -105.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -206,
          "y": -138.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -220,
          "y": -82.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -236,
          "y": -41.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -247,
          "y": 44.5,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -31.30146465586793,
          "y": -44.14261776205548
        },
        {
          "x": 37.924824948132766,
          "y": -42.08639133817427
        },
        {
          "x": -71.4687975038003,
          "y": -45.335706856548526
        },
        {
          "x": 48.96888071330653,
          "y": 21.885780735568083
        },
        {
          "x": 4.14696924941687,
          "y": 58.073963351905235
        },
        {
          "x": -45.9567229060859,
          "y": -10.446221055349923
        },
        {
          "x": 178.0269215762778,
          "y": -62.97093250097542
        }
      ],
      "regions": [],
      "areas": [
        [
          {
            "id": 0,
            "line": [
              15,
              13,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 7,
            "line": [
              13,
              18,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 14,
            "line": [
              18,
              15,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 1,
            "line": [
              13,
              14,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 10,
            "line": [
              14,
              16,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 4,
            "line": [
              16,
              17,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 13,
            "line": [
              17,
              18,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 7,
            "line": [
              18,
              13,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 2,
            "line": [
              14,
              1,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 3,
            "line": [
              1,
              16,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 10,
            "line": [
              16,
              14,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 5,
            "line": [
              17,
              2,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 6,
            "line": [
              2,
              18,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 13,
            "line": [
              18,
              17,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 8,
            "line": [
              13,
              3,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 9,
            "line": [
              3,
              14,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 1,
            "line": [
              14,
              13,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 11,
            "line": [
              16,
              4,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 12,
            "line": [
              4,
              17,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 4,
            "line": [
              17,
              16,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 15,
            "line": [
              3,
              1,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 2,
            "line": [
              1,
              14,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 9,
            "line": [
              14,
              3,
              -1,
              -1,
              1
            ]
          }
        ],
        [
          {
            "id": 19,
            "line": [
              19,
              7,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 18,
            "line": [
              7,
              6,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 17,
            "line": [
              6,
              19,
              -1,
              -1,
              1
            ]
          }
        ]
      ]
    },
    "use": true,
    "name": "Pen",
    "type": "PEN",
    "id": "514ed7d9-cb72-4f01-b3ea-6d0512d5293e",
    "percent": {
      "x": 0,
      "y": 0
    },
    "relativeCenter": {
      "x": 0,
      "y": 0
    },
    "realRotation": 0,
    "start": {
      "x": 215,
      "y": 131
    },
    "absolute": {
      "x": 685,
      "y": 23
    },
    "original": {
      "x": 685,
      "y": 23
    },
    "center": {
      "x": 932,
      "y": 180.5
    },
    "box": {
      "leftX": 685,
      "rightX": 1179,
      "topY": 23,
      "bottomY": 338,
      "topLeft": {
        "x": 685,
        "y": 23
      },
      "topRight": {
        "x": 1179,
        "y": 23
      },
      "bottomLeft": {
        "x": 685,
        "y": 338
      },
      "bottomRight": {
        "x": 1179,
        "y": 338
      }
    },
    "strokeAlign": "INSIDE",
    "isComplete": true
  },
  {
    "lineWidth": 1.5,
    "fillColor": "rgb(58,58,58)",
    "borderColor": "rgb(140,140,140)",
    "children": [],
    "flipHorizontal": false,
    "flipVertical": false,
    "radius": 0,
    "lineShapes": [],
    "cacheLineShapes": [],
    "commonPoints": [],
    "rotation": 0,
    "layout": {
      "x": 396.5790467944545,
      "y": 178.99961180124222,
      "w": 167.92095320554552,
      "h": 99.00038819875778
    },
    "isCustom": true,
    "isVisible": false,
    "isLocked": false,
    "cornerSmooth": 0,
    "cornerRadius": 0,
    "topLeftRadius": 0,
    "topRightRadius": 0,
    "bottomLeftRadius": 0,
    "bottomRightRadius": 0,
    "opacity": 0,
    "blendMode": 0,
    "isMask": false,
    "effects": [],
    "isCache": false,
    "isPointOrLine": false,
    "penNetwork": {
      "ctrlNodes": [
        {
          "x": 5.335476602772758,
          "y": -59.37480590062111
        },
        {
          "x": -54.41452339722724,
          "y": -13.624805900621109
        },
        {
          "x": -135.53952339722724,
          "y": 49.50019409937889
        },
        {
          "x": 64.46047660277276,
          "y": 49.50019409937889
        }
      ],
      "paths": [
        [
          0,
          1,
          -1,
          0,
          2
        ],
        [
          1,
          2,
          1,
          2,
          3
        ]
      ],
      "nodes": [
        {
          "x": 83.96047660277276,
          "y": -41.99980590062111,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -24.539523397227242,
          "y": -36.49980590062111,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            0,
            1
          ]
        },
        {
          "x": -35.53952339722724,
          "y": 49.50019409937889,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            3,
            2
          ]
        }
      ],
      "regions": []
    },
    "cache": {
      "ctrlNodes": [
        {
          "x": 5.335476602772758,
          "y": -59.37480590062111
        },
        {
          "x": -54.41452339722724,
          "y": -13.624805900621109
        },
        {
          "x": -135.53952339722724,
          "y": 49.50019409937889
        },
        {
          "x": 64.46047660277276,
          "y": 49.50019409937889
        }
      ],
      "paths": [
        [
          0,
          1,
          -1,
          0,
          2
        ],
        [
          1,
          2,
          1,
          2,
          3
        ]
      ],
      "nodes": [
        {
          "x": 83.96047660277276,
          "y": -41.99980590062111,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -24.539523397227242,
          "y": -36.49980590062111,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            0,
            1
          ]
        },
        {
          "x": -35.53952339722724,
          "y": 49.50019409937889,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            3,
            2
          ]
        }
      ],
      "regions": []
    },
    "use": true,
    "name": "Pen",
    "type": "PEN",
    "id": "514ed7d9-cb72-4f01-b3ea-6d0512d5293e",
    "percent": {
      "x": 0,
      "y": 0
    },
    "relativeCenter": {
      "x": 0,
      "y": 0
    },
    "realRotation": 0,
    "start": {
      "x": 215,
      "y": 131
    },
    "absolute": {
      "x": 396.5790467944545,
      "y": 178.99961180124222
    },
    "original": {
      "x": 396.5790467944545,
      "y": 178.99961180124222
    },
    "center": {
      "x": 480.53952339722724,
      "y": 228.4998059006211
    },
    "box": {
      "leftX": 396.5790467944545,
      "rightX": 564.5,
      "topY": 178.99961180124222,
      "bottomY": 278,
      "topLeft": {
        "x": 396.5790467944545,
        "y": 178.99961180124222
      },
      "topRight": {
        "x": 564.5,
        "y": 178.99961180124222
      },
      "bottomLeft": {
        "x": 396.5790467944545,
        "y": 278
      },
      "bottomRight": {
        "x": 564.5,
        "y": 278
      }
    },
    "strokeAlign": "INSIDE",
    "isComplete": true
  },
  {
    "lineWidth": 1.5,
    "fillColor": "#4C4C4C",
    "borderColor": "rgb(140,140,140)",
    "children": [],
    "flipHorizontal": false,
    "flipVertical": false,
    "radius": 0,
    "lineShapes": [],
    "cacheLineShapes": [],
    "commonPoints": [],
    "rotation": 0,
    "layout": {
      "x": 47.5,
      "y": 49,
      "w": 250,
      "h": 250
    },
    "isCustom": true,
    "isVisible": false,
    "isLocked": false,
    "cornerSmooth": 0,
    "cornerRadius": 0,
    "topLeftRadius": 0,
    "topRightRadius": 0,
    "bottomLeftRadius": 0,
    "bottomRightRadius": 0,
    "opacity": 0,
    "blendMode": 0,
    "isMask": false,
    "effects": [],
    "isCache": true,
    "isPointOrLine": false,
    "penNetwork": {
      "ctrlNodes": [],
      "paths": [
        [
          0,
          1,
          -1,
          -1,
          1
        ],
        [
          2,
          6,
          -1,
          -1,
          1
        ],
        [
          6,
          1,
          -1,
          -1,
          1
        ],
        [
          2,
          3,
          -1,
          -1,
          1
        ],
        [
          4,
          3,
          -1,
          -1,
          1
        ],
        [
          4,
          5,
          -1,
          -1,
          1
        ]
      ],
      "nodes": [
        {
          "x": 25,
          "y": -125,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 25,
          "y": 25,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 125,
          "y": -75,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -125,
          "y": -75,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": 125,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": -55,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": 60,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        }
      ],
      "regions": []
    },
    "cache": {
      "ctrlNodes": [],
      "paths": [
        [
          0,
          7,
          -1,
          -1,
          1
        ],
        [
          7,
          1,
          -1,
          -1,
          1
        ],
        [
          6,
          2,
          -1,
          -1,
          1
        ],
        [
          1,
          6,
          -1,
          -1,
          1
        ],
        [
          2,
          7,
          -1,
          -1,
          1
        ],
        [
          7,
          3,
          -1,
          -1,
          1
        ],
        [
          4,
          3,
          -1,
          -1,
          1
        ],
        [
          4,
          5,
          -1,
          -1,
          1
        ]
      ],
      "nodes": [
        {
          "x": 25,
          "y": -125,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 25,
          "y": 25,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 125,
          "y": -75,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": -125,
          "y": -75,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": 125,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": -55,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 75,
          "y": 60,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            -1,
            -1
          ]
        },
        {
          "x": 25,
          "y": -75
        }
      ],
      "regions": [],
      "areas": [
        [
          {
            "id": 0,
            "line": [
              7,
              1,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 2,
            "line": [
              1,
              6,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 1,
            "line": [
              6,
              2,
              -1,
              -1,
              1
            ]
          },
          {
            "id": 3,
            "line": [
              2,
              7,
              -1,
              -1,
              1
            ]
          }
        ]
      ]
    },
    "use": true,
    "name": "Pen",
    "type": "PEN",
    "id": "bf0599cb-0b06-4cae-a337-71780af9e35c",
    "percent": {
      "x": 0,
      "y": 0
    },
    "relativeCenter": {
      "x": 0,
      "y": 0
    },
    "realRotation": 0,
    "start": {
      "x": 174,
      "y": 29
    },
    "absolute": {
      "x": 47.5,
      "y": 49
    },
    "original": {
      "x": 47.5,
      "y": 49
    },
    "center": {
      "x": 172.5,
      "y": 174
    },
    "box": {
      "leftX": 47.5,
      "rightX": 297.5,
      "topY": 49,
      "bottomY": 299,
      "topLeft": {
        "x": 47.5,
        "y": 49
      },
      "topRight": {
        "x": 297.5,
        "y": 49
      },
      "bottomLeft": {
        "x": 47.5,
        "y": 299
      },
      "bottomRight": {
        "x": 297.5,
        "y": 299
      }
    },
    "strokeAlign": "INSIDE",
    "isComplete": true
  }
]

