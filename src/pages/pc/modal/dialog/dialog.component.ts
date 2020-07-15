import { Component } from '@angular/core';
import { DialogController, DialogConfig } from '@tanbo/ui';

@Component({
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  constructor(private dialogController: DialogController) {
  }

  show() {
    const config: DialogConfig = {
      title: '标题',
      content: '提示消息！',
      confirmBtnText: '确认',
      cancelBtnText: '取消'
    };
    this.dialogController.dialog(config).then(b => {
      if (b) {
        console.log('你点击了确认按钮');
      } else {
        console.log('你点击了取消按钮');
      }
    });
  }
}
