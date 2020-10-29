`CubicBezier` 默认为 0,0 点到 1,1 点，并对时间因子 `t` 做了偏移修正，让返回的 `point.x` 和 时间因子 `t` 保持同步，其效果同CSS的贝塞尔曲线一样。也就是说 `CubicBezier` 和 `Bezier` 传入同样参数的情况下，返回值是不一样的。


```typescript
import { CubicBezier } from '@tanbo/bezier';

const bezier = new CubicBezier(.48, .08, .21, .8); 

const div = document.getElementById('box');

let i = 0;

const fn = function() {
    if (i < 100) {
        i++;
        // t 为当前时间系数
        const t = 1 / 100;
        // result 为当前 bezier 坐标点的位置
        const result = bezier.update(t);
        div.style.transform = `translateX(${result.y * 400}px)`;
      
        requestAnimationFrame(fn);
    }
};

requestAnimationFrame(fn);
```
