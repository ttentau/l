import {P} from "../types/type";
import {BaseConfig} from "./BaseConfig"

export type StrokeCap =
  'NONE'
  | 'ROUND'
  | 'SQUARE'
  | 'LINE_ARROW'
  | 'TRIANGLE_ARROW'
  | 'ROUND_ARROW'
  | 'RING'
  | 'DIAMOND'
  | 'LINE'

export type WindingRule = 'Nonzero' | 'Evenodd'
export type HandleMirroring = "NONE" | "ANGLE" | "ANGLE_AND_LENGTH"

export interface PenNetworkNode {
  x: number
  y: number
  cornerRadius: number
  realCornerRadius?: number,//真实的圆角
  handleMirroring: HandleMirroring,
  cornerTangentStart?: P,
  cornerTangentEnd?: P,
}

export interface Region {
  loops: number[][]
  windingRule: WindingRule
}

//TODO 这里叫path，可能会让人困惑
export interface PenNetworkPath {
  start: number,
  end: number
  tangentStart?: P,
  tangentEnd?: P,
  arcCP?: P,
  arcPoint?: P
}
export interface PenNetworkPath2 extends PenNetworkPath{
  startPoint: P,
  endPoint: P,
}

export interface PenNetwork {
  nodes: PenNetworkNode[]
  paths: PenNetworkPath[][]
  regions: Region[]
}

export interface PenConfig extends BaseConfig {
  // penNetwork: PenNetwork
}