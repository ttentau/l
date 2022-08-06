import {FontFamily, FontWeight, RectType, TextAlign, TextBaseline, TextMode} from "./type";
import {cloneDeep} from "lodash";

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
  line: 'rgb(216,216,216)',
}
export const rects = [
  {
    "x": 433,
    "y": 182,
    "w": 300,
    "h": 300,
    "rotate": 0,
    "lineWidth": 2,
    "type": 0,
    "color": "gray",
    "radius": 100,
    "children": [
      {
        "x": 433,
        "y": 182,
        "w": 300,
        "h": 300,
        "rotate": 0,
        "lineWidth": 2,
        "type": 3,
        "color": "gray",
        "radius": 100,
        "children": [],
        "brokenTexts": [],
        "borderColor": "rgb(216,216,216)",
        "fillColor": "rgb(216,216,216)",
        "fontSize": 0,
        "texts": [],
        "name": "JUXING",
        "leftX": 433,
        "rightX": 733,
        "topY": 182,
        "bottomY": 482,
        "id": 1659774134051
      }
    ],
    "brokenTexts": [],
    "borderColor": "rgb(216,216,216)",
    "fillColor": "rgb(216,216,216)",
    "fontSize": 0,
    "texts": [],
    "name": "JUXING",
    "leftX": 433,
    "rightX": 733,
    "topY": 182,
    "bottomY": 482,
    "id": "f345f2c5-6bb0-429d-ad79-42ee0a50094d"
  },
  {
    "x": 16,
    "y": 21,
    "w": 82,
    "h": 97,
    "rotate": 0,
    "lineWidth": 2,
    "type": 0,
    "color": "gray",
    "radius": 30,
    "children": [],
    "brokenTexts": [],
    "borderColor": "gray",
    "fillColor": "gray",
    "fontSize": 0,
    "texts": [],
    "name": "oneBox3",
    "leftX": 16,
    "rightX": 98,
    "topY": 21,
    "bottomY": 118,
    "id": "3b83a2c8-a17c-414e-97ba-6589a0d537df"
  },
  {
    "x": 1196,
    "y": 49,
    "w": 350,
    "h": 100,
    "rotate": 10,
    "lineWidth": 2,
    "flipHorizontal": true,
    "type": 0,
    "color": "gray",
    "radius": 0,
    "children": [],
    "name": "oneBox",
    "borderColor": "gray",
    "fillColor": "gray",
    "leftX": 1196,
    "rightX": 1546,
    "topY": 49,
    "bottomY": 149,
    "id": "cfc1020b-51e0-4234-9943-0f6abc851d00"
  },
  {
    "borderColor": "",
    "fillColor": "",
    "textAlign": "right",
    "textBaseline": 1,
    "name": "text",
    "texts": [
      "输入文本"
    ],
    "brokenTexts": [
      "输入文本"
    ],
    "x": 609,
    "y": 46,
    "w": 80,
    "h": 25,
    "fontFamily": "SourceHanSansCN",
    "fontWeight": 500,
    "letterSpacing": 0,
    "textLineHeight": 20,
    "textMode": 2,
    "rotate": 0,
    "lineWidth": 2,
    "fontSize": 20,
    "type": 4,
    "color": "gray",
    "radius": 0,
    "children": [],
    "leftX": 609,
    "rightX": 689,
    "topY": 46,
    "bottomY": 71,
    "id": "420131c8-ece7-41d6-b7a6-c8b45dedd669"
  },
  {
    "img": "../../assets/image/a.jpg",
    "brokenTexts": [],
    "borderColor": "black",
    "fillColor": "black",
    "fontSize": 0,
    "texts": [],
    "x": 1188,
    "y": 338,
    "w": 150,
    "h": 150,
    "rotate": 0,
    "lineWidth": 2,
    "type": 5,
    "color": "gray",
    "radius": 0,
    "children": [],
    "name": "img",
    "leftX": 1188,
    "rightX": 1338,
    "topY": 338,
    "bottomY": 488,
    "id": "6a848f44-e696-4b2e-85b9-44365ab92638"
  },
  {
    "borderColor": "rgb(216,216,216)",
    "fillColor": "black",
    "fontSize": 0,
    "texts": [],
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotate": 0,
    "lineWidth": 2,
    "type": 7,
    "radius": 0,
    "points": [
      {
        "x": 800,
        "y": 100
      },
      {
        "x": 1200,
        "y": 300
      },
      {
        "x": 1100,
        "y": 400
      }
    ],
    "children": [],
    "name": "PEN",
    "leftX": 0,
    "rightX": 0,
    "topY": 0,
    "bottomY": 0,
    "id": "93cd2a00-edde-4554-8605-471d3f8520c4"
  },
  {
    "borderColor": "rgb(216,216,216)",
    "fillColor": "black",
    "fontSize": 0,
    "texts": [],
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "rotate": 0,
    "lineWidth": 2,
    "type": 6,
    "radius": 0,
    "points": [
      {
        "x": 800,
        "y": 200
      },
      {
        "x": 1200,
        "y": 500
      }
    ],
    "children": [],
    "name": "PENCIL",
    "leftX": 0,
    "rightX": 0,
    "topY": 0,
    "bottomY": 0,
    "id": "e4076095-bd00-4345-a2bc-6bbea7da3457"
  },
  {
    "borderColor": "gray",
    "fillColor": "gray",
    "fontSize": 0,
    "texts": [],
    "x": 6,
    "y": 124,
    "w": 96,
    "h": 90,
    "rotate": 0,
    "lineWidth": 2,
    "type": 8,
    "radius": 0,
    "points": [],
    "children": [],
    "name": "ROUND",
    "leftX": 6,
    "rightX": 102,
    "topY": 124,
    "bottomY": 214,
    "id": "9c79c005-4800-4583-9f98-74dea5ce3dd7"
  },
  {
    "borderColor": "gray",
    "fillColor": "white",
    "fontSize": 0,
    "texts": [],
    "x": 11,
    "y": 217,
    "w": 89,
    "h": 90,
    "rotate": 0,
    "lineWidth": 2,
    "type": 9,
    "radius": 0,
    "points": [],
    "children": [],
    "name": "STAR",
    "leftX": 11,
    "rightX": 100,
    "topY": 217,
    "bottomY": 307,
    "id": "46ad1664-0d92-4ee0-8613-89622dccd45a"
  },
  {
    "borderColor": "gray",
    "fillColor": "white",
    "fontSize": 0,
    "texts": [],
    "x": 9,
    "y": 313,
    "w": 87,
    "h": 100,
    "rotate": 0,
    "lineWidth": 2,
    "type": 10,
    "radius": 0,
    "points": [],
    "children": [],
    "name": "POLYGON",
    "leftX": 9,
    "rightX": 96,
    "topY": 313,
    "bottomY": 413,
    "id": "39af9010-f373-4c6d-99be-40dc528914f0"
  }
]
