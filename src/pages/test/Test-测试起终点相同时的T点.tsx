import React, { Component } from 'react'
import './index.scss'
import { withRouter } from "../../components/WithRouter"
import { Bezier } from "bezier-js";
// @ts-ignore
import { Button } from "antd";
import { CodeExample } from "./a";
import { Math2 } from '../../lib/designer/utils/math';


class T extends Component<any, any> {

  componentDidMount() {
    let P0 = { x: 0, y: 50 }
    let P1 = { x: 50, y: 200 }
    let P2 = { x: 300, y: 400 }
    let P3 = { x: 400, y: 50 }
    let curve = new Bezier(P0.x, P0.y, 50, 200, 300, 400, P3.x, P3.y);
    var code = new CodeExample(0);
    code.drawSkeleton(curve);
    code.drawCurve(curve);
    var LUT = curve.getLUT(16);
    LUT.forEach(p => code.drawCircle(p, 2));

    let t = 0.5
    let A = curve.get(t)
    console.log('A', A)
    code.setColor("red");
    code.drawPoint(curve.get(t));


    // curve = new Bezier(P0.x, P0.y, 50, 300, 300, 450, P3.x, P3.y);
    // code.drawSkeleton(curve);
    // code.drawCurve(curve);
    // var LUT = curve.getLUT(16);
    // LUT.forEach(p => code.drawCircle(p, 2));

    // let A = curve.get(t)
    // console.log('A', A)
    // code.setColor("red");
    // code.drawPoint(curve.get(t));
    //
    // let s = Math2.getControlPoint(P0, P3, A, t)
    // console.log('s', s)
    // t=0.5时的坐标
    // let A = {x: 67.5, y: 47.5};

// A向下平移10个单位
    let Ap = { x: A.x, y: A.y + 50 };

// 计算参数t
    t = (Ap.x - P0.x) / (P3.x - P0.x);

// 计算新的控制点P1'和P2'
    let P1p = {
      x: P0.x + 2 / 3 * t * (P1.x - P0.x),
      y: P0.y + 2 / 3 * t * (P1.y - P0.y)
    };
    let P2p = {
      x: P3.x - 2 / 3 * (1 - t) * (P3.x - P2.x),
      y: P3.y - 2 / 3 * (1 - t) * (P3.y - P2.y)
    };

    console.log(P1p); // 输出新的控制点P1'
    console.log(P2p); // 输出新的控制点P2'
    // curve = new Bezier(P0.x, P0.y, s[0].x, s[0].y, s[1].x, s[1].y, P3.x, P3.y);
    curve = new Bezier(P0.x, P0.y, P1p.x, P1p.y, P2p.x, P2p.y, P3.x, P3.y);
    code.drawSkeleton(curve);
    code.drawCurve(curve);

  }

  nav(path: any) {
    this.props.navigate(path)
  }

  render() {
    return (
      <>
        <div className={'content'}>
          <canvas width="500" height="500"></canvas>
          <Button onClick={() => this.nav('/')}>回/</Button>
        </div>
      </>
    )
  }
}

export default withRouter(T)

