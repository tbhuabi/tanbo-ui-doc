Bezier 普通贝塞尔曲线
```typescript
import { Bezier } from '@tanbo/bezier';

// 可以传偶数个数字，且不少于4个
const bezier = new Bezier([
      -.9, -.7,
      -.8, .4,
      .1, -.6,
      .2, -1,
      .5, .6,
      .5, 1.3,
      0, .9,
      1, 1]); 

const div = document.getElementById('box');

let i = 0;

const fn = function() {
    if (i < 100) {
        i++;
        // result 为当前 bezier 坐标点的位置
        const result = bezier.update(i / 100);
        console.log(result);
        
        requestAnimationFrame(fn);
    }
};

requestAnimationFrame(fn);
```
