
- 翻转后，单边拉伸、自由拉伸时，均需要将当前点{x,y}进行对应（水平就翻转x，垂直就翻转y）翻转。同时渲染时要将tran(X,Y)加上两个中心点偏移量。最后停止变换也要将对应x，y加上两个中心点偏移量


```javascript
 if (flipHorizontal) {
  scaleX = -1
  // tranX = -tranX
  //如果在翻转情况下，拉伸要将tranX减去两个中心点偏移量
  if ((enterLT || enterL)) {
    console.log('tranX1', tranX)
    let d = oldCenter!.x - currentCenter!.x
    tranX += d * 2
    console.log('tranX2', tranX)
  }
}
```

- 多边形
  - 当radius为0时，纯直线绘制，只需要用lineTo方法
  - 不为0是，采用arcTo绘制
  - 当自定义后，采用acrTo和quadraticCurveTo混合绘制，其中quadraticCurveTo又分为3种模式（完全对称、角度对称、不对称）

- 圆形
  - http://www.alloyteam.com/2015/07/canvas-hua-tuo-yuan-di-fang-fa/
  - 默认椭圆可以用直接用canvas api 
  - https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/ellipse
  - 完整圆形点击之后用4条用bezierCurveTo绘制，一个控制点为0.6倍长，另一个为0.5倍宽，可以对调
  - 不完整圆形，用N条曲线绘制
    - 大于1/2：8条
    - 大于1/4小于1/2:4条
    - 小于1/4：2条
  - 难点1，如何把原来的4条曲线，拆分为N条，并保持弧度不变？
    - 可以利用曲线反推控制点这个公式，计算出某条曲线上的几分之一的两个控制点，
    - 利用计算好的新的两个控制点，只绘制曲线上几分之一
  - 难点2：两条相连的曲线，如何绘制一条新的跨越两条的曲线？
    - 也是用曲线反推控制点这个公式。
    - tp1T = (getDecimal(lastT) + perPart * (1 / 4))
      laseT = 1 - tp1T
      tp2T = perPart * (2 / 4) - laseT

- 贝塞尔曲线
  - 原理
    - https://zh.javascript.info/bezier-curve
    - https://www.zhihu.com/question/29565629
    - https://pomax.github.io/bezierinfo/zh-CN/index.html#matrix
  -在线
    - https://jarenchow.github.io/JanvasExamples/html/beziermaker.html
  - 从贝塞尔曲线反推控制点
    - https://jermmy.github.io/2016/08/01/2016-8-1-Bezier-Curve-SVG/
    - https://juejin.cn/post/6995482699037147166
  - 贝塞尔曲线如何通过坐标反推出 t (时间)
    - https://www.zhihu.com/question/30570430
    - https://juejin.cn/post/6844903958616473613#heading-3
    - https://math.stackexchange.com/questions/527005/find-value-of-t-at-a-point-on-a-cubic-bezier-curve
  - 计算曲线与直线相交，直接用曲线公式与直线公式（y=k*x）联立求解出T，再根据T计算出曲线上的点，就是相交的点