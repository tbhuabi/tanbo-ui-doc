import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createEditor } from '@tanbo/tbus';
import { Observable } from 'rxjs';
import { DialogController } from '@tanbo/ui';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('editor', {static: true})
  editor: ElementRef;

  editors = {
    wangEditor: true,
    TinyMCE: false,
    UEditor: false,
    KindEditor: false,
    Textbox: false,
    CKEditor: false,
    Quill: false
  };

  constructor(private dialog: DialogController) {
  }

  ngOnInit(): void {
    const self = this;
    createEditor(this.editor.nativeElement, {
      uploader(type: string): string | Promise<string> | Observable<string> {
        return self.dialog.dialog(`暂未配置 ${type} 上传地址`).then(() => {
          return '/test';
        });
      },
      content: `<p>欢迎你使用&nbsp;<strong>TBus</strong> 富文本编辑器...<br></p>`
    });
  }
}
