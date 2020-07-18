import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { Demo1Service } from './demo1.service';

@Component({
  selector: 'editor-demo1',
  templateUrl: './demo1.component.html',
  providers: [
    Demo1Service
  ]
})
export class EditorDemo1Component {
  uploader = (type: string) => {
    console.log(type);
    if (type === 'image') {
      const fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      fileInput.style.cssText = 'position: absolute; left: -9999px; top: -9999px; opacity: 0';
      const obs = fromEvent(fileInput, 'change').pipe(switchMap((event: any) => {
        const form = new FormData();
        for (const file of event.target.files) {
          form.append('file', file);
        }
        document.body.removeChild(fileInput);
        return this.demo1Service.uploadImg(form);
      })).pipe(map(response => {
        return response.imageUrl;
      }));
      document.body.appendChild(fileInput);
      fileInput.click();
      return obs;
    }
  }

  constructor(private demo1Service: Demo1Service) {
  }
}
