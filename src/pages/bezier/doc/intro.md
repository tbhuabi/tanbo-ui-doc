<h2 uiAnchor id="简介">简介</h2>

由于 CSS 中，transition 属性并不能监听当前动画进行到哪一步了，但实际应用中，有的场景需要根据当前动画的进度——即时间因子 t，tanbo-bezier 实现了 CSS transition 中的贝塞尔曲线，也实现了多次贝塞尔曲线，阅读以下文档，即可帮助你灵活运用 tanbo-bezier。

```bash
npm install @tanbo/bezier --save
```

<ui-divider></ui-divider>

<h2 uiAnchor id="CubicBezier">CubicBezier</h2>

CubicBezier，即 CSS 中 transition 的贝塞尔曲线。
