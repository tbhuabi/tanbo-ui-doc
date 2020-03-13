import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DrawerController } from '@tanbo/ui';

@Component({
  templateUrl: './drawer-example.component.html'
})
export class DrawerExampleComponent {
  @ViewChild('template', {static: true}) template: TemplateRef<any>;

  constructor(private drawerController: DrawerController) {
  }

  show() {
    this.drawerController.show({
      direction: 'bottom', // 默认为 bottom，可选 top、right、left
      content: this.template
    }).then(() => {
      console.log('隐藏完成！');
    });
  }

  submit() {
    // 提交表单
    this.drawerController.hide();
  }
}
