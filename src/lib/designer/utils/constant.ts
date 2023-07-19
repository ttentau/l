import {FontWeight, P, ShapeType, StrokeAlign, TextMode} from "../types/type"
import {FontFamily, TextAlign} from "../config/TextConfig"
import {HandleMirroring, PenConfig} from "../config/PenConfig"

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
  Select: 'rgba(75,117,246,0.1)',
  Line: 'rgb(217,217,217)',
  Line2: 'rgb(140,140,140)',
  FillColor: 'rgb(241,238,238)',
  Border: 'rgb(140,140,140)',
  White: 'white',
  Transparent: 'transparent',
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
export const rectsd: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 700,
      "y": 100,
      "w": 300,
      "h": 300
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
          "x": -150,
          "y": -30,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "RightAngle",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": 150,
          "y": -30,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": 150,
          "y": 50,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngle",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": -150,
          "y": 50,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": 10,
          "y": -150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": -10,
          "y": -150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": 130,
          "y": 150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        },
        {
          "x": -130,
          "y": 150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
          "cornerCps": [-1, -1],
          "cps": [-1, -1]
        }
      ],
      "paths": [
        [0, 1, -1, -1, -1, -1, 1],
        [2, 3, -1, -1, -1, -1, 1],
        [4, 7, -1, -1, -1, -1, 1],
        [5, 6, -1, -1, -1, -1, 1],
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
      "x": 100,
      "y": 100
    },
    "absolute": {
      "x": 100,
      "y": 100
    },
    "original": {
      "x": 100,
      "y": 100
    },
    "center": {
      "x": 150,
      "y": 250
    },
    "box": {
      "leftX": 100,
      "rightX": 200,
      "topY": 100,
      "bottomY": 400,
      "topLeft": {
        "x": 100,
        "y": 100
      },
      "topRight": {
        "x": 200,
        "y": 100
      },
      "bottomLeft": {
        "x": 100,
        "y": 400
      },
      "bottomRight": {
        "x": 200,
        "y": 400
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": []
  }
]
export const rectse: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 700,
      "y": 100,
      "w": 300,
      "h": 300
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
          "x": -305,
          "y": -50,
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
          "x": 150,
          "y": -50,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 154,
          "y": 106,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngle",
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
          "x": -291,
          "y": 106,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 162,
          "y": -102,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": -239,
          "y": -168,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 170,
          "y": 165,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": -310,
          "y": 246,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "y": -174,
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
          "x": -275,
          "y": 262,
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
      "paths": [
        [
          0,
          1,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          2,
          3,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          4,
          7,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          5,
          6,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          8,
          9,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
      "x": 700,
      "y": 100
    },
    "original": {
      "x": 700,
      "y": 100
    },
    "center": {
      "x": 850,
      "y": 250
    },
    "box": {
      "leftX": 700,
      "rightX": 1000,
      "topY": 100,
      "bottomY": 400,
      "topLeft": {
        "x": 700,
        "y": 100
      },
      "topRight": {
        "x": 1000,
        "y": 100
      },
      "bottomLeft": {
        "x": 700,
        "y": 400
      },
      "bottomRight": {
        "x": 1000,
        "y": 400
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": [],
    "id": "df2ab59f-ca6d-4a7b-872a-af359d8b627b"
  }
]
export const rectsg: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 700,
      "y": 100,
      "w": 300,
      "h": 300
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
          "x": -150,
          "y": -30,
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
          "x": 150,
          "y": -30,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 150,
          "y": 50,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngle",
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
          "x": -150,
          "y": 50,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 10,
          "y": -150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": -10,
          "y": -150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": 130,
          "y": 150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": -130,
          "y": 150,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "NoMirror",
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
          "x": -168,
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
          "x": 195,
          "y": 103,
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
      "paths": [
        [
          0,
          1,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          2,
          3,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          4,
          7,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          5,
          6,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          8,
          9,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
      "x": 700,
      "y": 100
    },
    "original": {
      "x": 700,
      "y": 100
    },
    "center": {
      "x": 850,
      "y": 250
    },
    "box": {
      "leftX": 700,
      "rightX": 1000,
      "topY": 100,
      "bottomY": 400,
      "topLeft": {
        "x": 700,
        "y": 100
      },
      "topRight": {
        "x": 1000,
        "y": 100
      },
      "bottomLeft": {
        "x": 700,
        "y": 400
      },
      "bottomRight": {
        "x": 1000,
        "y": 400
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": [],
    "id": "19fbc200-c966-4f54-8939-08bb9fb7b361"
  }
]
export const rectsh: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 202,
      "y": 50,
      "w": 798,
      "h": 391
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
          "x": -323,
          "y": -127.5,
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
          "x": -140,
          "y": -136.5,
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
          "x": -312,
          "y": -34.5,
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
          "x": -70,
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
          "x": -249,
          "y": -195.5,
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
          "x": -265,
          "y": 53.5,
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
          "x": -178,
          "y": -189.5,
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
          "x": -164,
          "y": 63.5,
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
          "x": -320,
          "y": 145.5,
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
          "x": -131,
          "y": 128.5,
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
          "x": -210,
          "y": 195.5,
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
          "x": -333,
          "y": 168.5,
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
          "x": -399,
          "y": 58.5,
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
          "x": -266,
          "y": 104.5,
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
      "paths": [
        [
          0,
          1,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          2,
          3,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          4,
          5,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          6,
          7,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          8,
          9,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          9,
          10,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          10,
          11,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          11,
          12,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          12,
          13,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
      "x": 202,
      "y": 50
    },
    "original": {
      "x": 202,
      "y": 50
    },
    "center": {
      "x": 601,
      "y": 245.5
    },
    "box": {
      "leftX": 202,
      "rightX": 1000,
      "topY": 50,
      "bottomY": 441,
      "topLeft": {
        "x": 202,
        "y": 50
      },
      "topRight": {
        "x": 1000,
        "y": 50
      },
      "bottomLeft": {
        "x": 202,
        "y": 441
      },
      "bottomRight": {
        "x": 1000,
        "y": 441
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": [],
    "id": "3327ff0a-41d9-4af5-aed6-0d8045e782cf"
  }
]
export const rectsj1: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 250.05088174397093,
      "y": 187.15896142420058,
      "w": 421.949118256029,
      "h": 189.84103857579942
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
      "ctrlNodes": [
        {
          "x": -357.02544087198544,
          "y": -31.079480712100228
        },
        {
          "x": 230.97455912801456,
          "y": -35.07948071210032
        },
        {
          "x": -107.2754408719855,
          "y": -192.8294807121003
        },
        {
          "x": -102.77544087198541,
          "y": 184.6705192878997
        }
      ],
      "nodes": [
        {
          "x": 10.974559128014562,
          "y": 13.920519287899708,
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
          "x": -63.02544087198544,
          "y": -33.07948071210029,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            1,
            0
          ]
        },
        {
          "x": -105.02544087198544,
          "y": -4.079480712100292,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            2,
            3
          ]
        },
        {
          "x": 210.97455912801456,
          "y": -68.07948071210029,
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
          "x": 159.97455912801456,
          "y": 94.92051928789971,
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
      "paths": [
        [
          0,
          1,
          -1,
          1,
          -1,
          -1,
          2
        ],
        [
          1,
          2,
          0,
          2,
          -1,
          -1,
          3
        ],
        [
          2,
          3,
          3,
          -1,
          -1,
          -1,
          2
        ],
        [
          3,
          4,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
    "id": "9476d326-889c-4195-8ceb-0be61ff5bdcb"
  }
]
export const rectsj2: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 275.61653852530026,
      "y": 202.26146540571634,
      "w": 396.3834614746998,
      "h": 174.73853459428364
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
      "ctrlNodes": [
        {
          "x": -264.80826926265013,
          "y": 54.3692672971419
        },
        {
          "x": 185.19173073734987,
          "y": 50.36926729714182
        },
        {
          "x": -120.05826926265019,
          "y": -200.38073270285815
        },
        {
          "x": -115.5582692626501,
          "y": 177.11926729714185
        }
      ],
      "nodes": [
        {
          "x": 271.19173073734987,
          "y": -203.63073270285815,
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
          "x": -39.80826926265013,
          "y": 52.369267297141846,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            1,
            0
          ]
        },
        {
          "x": -117.80826926265013,
          "y": -11.630732702858154,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            2,
            3
          ]
        },
        {
          "x": 261.19173073734987,
          "y": 112.36926729714185,
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
          "x": 604.1917307373499,
          "y": 114.36926729714185,
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
      "paths": [
        [
          0,
          1,
          -1,
          1,
          -1,
          -1,
          2
        ],
        [
          1,
          2,
          0,
          2,
          -1,
          -1,
          3
        ],
        [
          2,
          3,
          3,
          -1,
          -1,
          -1,
          2
        ],
        [
          3,
          4,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
      "x": 275.61653852530026,
      "y": 202.26146540571634
    },
    "original": {
      "x": 275.61653852530026,
      "y": 202.26146540571634
    },
    "center": {
      "x": 473.80826926265013,
      "y": 289.63073270285815
    },
    "box": {
      "leftX": 275.61653852530026,
      "rightX": 672,
      "topY": 202.26146540571634,
      "bottomY": 377,
      "topLeft": {
        "x": 275.61653852530026,
        "y": 202.26146540571634
      },
      "topRight": {
        "x": 672,
        "y": 202.26146540571634
      },
      "bottomLeft": {
        "x": 275.61653852530026,
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
    "id": "9476d326-889c-4195-8ceb-0be61ff5bdcb"
  }
]
export const rects: any[] = [
  {
    "name": "矩形",
    "layout": {
      "x": 308.10774674264724,
      "y": 86,
      "w": 769.8922532573526,
      "h": 332.53870808678505
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
      "ctrlNodes": [
        {
          "x": -635.0538733713236,
          "y": 72.73064595660753
        },
        {
          "x": -185.05387337132356,
          "y": 68.73064595660745
        },
        {
          "x": -339.3038733713236,
          "y": -163.01935404339252
        },
        {
          "x": -334.80387337132356,
          "y": 214.48064595660748
        }
      ],
      "nodes": [
        {
          "x": 51.94612662867644,
          "y": -166.26935404339252,
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
          "x": -410.05387337132356,
          "y": 70.73064595660748,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            1,
            0
          ]
        },
        {
          "x": -337.05387337132356,
          "y": 25.730645956607475,
          "cornerRadius": 0,
          "realCornerRadius": 0,
          "handleMirroring": "MirrorAngleAndLength",
          "cornerCps": [
            -1,
            -1
          ],
          "cps": [
            2,
            3
          ]
        },
        {
          "x": 41.94612662867644,
          "y": 149.73064595660748,
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
          "x": 384.94612662867644,
          "y": 151.73064595660748,
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
          "x": -245.05387337132356,
          "y": -87.26935404339252,
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
          "x": -541.0538733713236,
          "y": 100.73064595660748,
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
      "paths": [
        [
          0,
          1,
          -1,
          1,
          -1,
          -1,
          2
        ],
        [
          1,
          2,
          0,
          2,
          -1,
          -1,
          3
        ],
        [
          2,
          3,
          3,
          -1,
          -1,
          -1,
          2
        ],
        [
          3,
          4,
          -1,
          -1,
          -1,
          -1,
          1
        ],
        [
          5,
          6,
          -1,
          -1,
          -1,
          -1,
          1
        ]
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
      "x": 308.10774674264724,
      "y": 86
    },
    "original": {
      "x": 308.10774674264724,
      "y": 86
    },
    "center": {
      "x": 693.0538733713236,
      "y": 252.26935404339252
    },
    "box": {
      "leftX": 308.10774674264724,
      "rightX": 1078,
      "topY": 86,
      "bottomY": 418.53870808678505,
      "topLeft": {
        "x": 308.10774674264724,
        "y": 86
      },
      "topRight": {
        "x": 1078,
        "y": 86
      },
      "bottomLeft": {
        "x": 308.10774674264724,
        "y": 418.53870808678505
      },
      "bottomRight": {
        "x": 1078,
        "y": 418.53870808678505
      }
    },
    "strokeAlign": "INSIDE",
    "lineShapes": [],
    "commonPoints": [],
    "id": "9476d326-889c-4195-8ceb-0be61ff5bdcb"
  }
]

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
  shapes: rects,
  lineWidth: 2,
  strokeStyle: Colors.Primary,
  fillStyle: Colors.FillColor
}