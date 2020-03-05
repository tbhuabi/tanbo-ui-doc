import { Component } from '@angular/core';
import { NotifyController } from '@tanbo/ui';

@Component({
  templateUrl: './pop-confirm.component.html',
  styleUrls: ['./pop-confirm.component.scss']
})
export class PopConfirmComponent {
  constructor(private notifyController: NotifyController) {
  }

  cancel() {
    this.notifyController.push('你选择了取消');
  }

  delete() {
    this.notifyController.push('你选择了确定');
  }
}