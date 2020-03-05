import { Component } from '@angular/core';

import { FileExampleService } from './file-example.service';

@Component({
  templateUrl: './file-example.component.html',
  providers: [
    FileExampleService
  ]
})
export class FileExampleComponent {

  constructor(private fileExampleService: FileExampleService) {
  }

  // 通过箭头函数绑定 this
  uploadFile = (formData: FormData) => {
    return this.fileExampleService.upload(formData);
  }
}
