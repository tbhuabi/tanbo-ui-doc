import { Component } from '@angular/core';
import { NotifyController, NotifyConfig, NotifyType } from '@tanbo/ui';

@Component({
  templateUrl: './notify.component.html'
})
export class NotifyComponent {
  constructor(private notifyController: NotifyController) {

  }

  show() {
    const notifyConfig: NotifyConfig = {
      content: '通知消息！',
      type: NotifyType.Primary,
      autoHide: true,
      time: 5000
    };
    this.notifyController.push(notifyConfig);
  }
}