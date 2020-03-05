import { Component } from '@angular/core';
import { PickerCell } from '@tanbo/ui';

@Component({
  selector: 'picker-demo',
  templateUrl: './picker-demo.component.html'
})
export class PickerDemoComponent {
  options: PickerCell[] = [{
    label: 'A',
    value: 'A'
  }, {
    label: 'B',
    value: 'B',
    children: [{
      label: 'BA',
      value: 'BA'
    }]
  }, {
    label: 'C',
    value: 'C'
  }];

  // 通过箭头函数绑定 this
  getChildren = (cell: PickerCell) => {
    // 模拟从服务端获取数据
    // return this.http.get('/url');
    return new Promise<PickerCell[]>((resolve => {
      const t = cell.label;
      setTimeout(() => {
        if (cell.label.length >= 4) {
          resolve(null);
          return;
        }
        resolve('ABCDEFGHIJK'.split('').map(s => {
          const result = t + s;
          return {
            label: result,
            value: result
          };
        }));
      }, 200);
    }));
  }
}
