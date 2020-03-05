import { Component } from '@angular/core';

import { Demo2Service } from './demo2.service';

@Component({
  selector: 'file-demo2',
  templateUrl: './demo2.component.html',
  providers: [
    Demo2Service
  ]
})
export class FileDemo2Component {
  constructor(private demo2Service: Demo2Service) {
  }

  // 通过箭头函数绑定 this
  uploadFile = (formData: FormData) => {
    return this.demo2Service.upload(formData);
  }

  uploadStart() {
    console.log('开始上传');
  }

  change(event: any) {
    console.log('用户选择了文件：', event);
  }

  uploaded(response: any) {
    console.log('服务器返回结果是：', response);
  }

  uploadError(error: Error) {
    console.log('上传发生错误：', error);
  }

  uploading(progress: number) {
    console.log('上传进度是：', progress);
  }
}
