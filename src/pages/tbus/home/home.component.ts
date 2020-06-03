import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  editors = {
    wangEditor: true,
    TinyMCE: false,
    UEditor: false,
    KindEditor: false,
    Textbox: false,
    CKEditor: false,
    Quill: false
  };
}
