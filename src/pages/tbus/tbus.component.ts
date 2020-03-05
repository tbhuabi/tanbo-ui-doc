import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogController } from '@tanbo/ui';
import { createEditor } from '@tanbo/tbus';
import { Observable } from 'rxjs';
import { AppService } from '../../app/app.service';

@Component({
  templateUrl: './tbus.component.html',
  styleUrls: ['./tbus.component.scss']
})
export class TBusComponent implements OnInit, OnDestroy {
  @ViewChild('editor', {static: true})
  editor: ElementRef;

  constructor(private dialog: DialogController,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.changeHeaderState(false);
    const self = this;
    createEditor(this.editor.nativeElement, {
      theme: 'dark',
      uploader(type: string): string | Promise<string> | Observable<string> {
        return self.dialog.dialog(`暂未配置 ${type} 上传地址`).then(() => {
          return '/test';
        });
      },
      content: `<h1 style="text-align: center; color: rgb(16, 125, 184);">TBus&nbsp;<span style="letter-spacing: 5px;">富文本编辑器</span></h1><h4 style="text-align: center; color: rgb(73, 80, 96);">—— 基于 Typescript，轻量，易扩展 ——</h4><p style="font-size: 15px; color: rgb(73, 80, 96);">和传统富文本编辑器不同，TBus 未使用 DOM 的 contentEditable 属性，并且采用分层设计，抽象了出了&nbsp;<strong>Fragment</strong>（片段） 数据模型、<strong>TBSelection</strong>（选区），使开发及扩展&nbsp;<strong>Commander</strong>（命令）无需关心浏览器的行为及差异，只需要关注当前的&nbsp;<strong>Contents</strong>（内容）和&nbsp;<strong>FormatRange</strong>（格式），这种高层次的抽象，使普通开发者也可以很容易的扩展出自己的功能。甚至，在富文本中实现代码高亮这样的功能，也变得很容易。</p><pre lang="Typescript" style="font-size: 15px;"><strong style="color: rgb(51, 51, 51);">import</strong>&nbsp;{ createEditor }&nbsp;<strong style="color: rgb(51, 51, 51);">from</strong>&nbsp;<span style="color: rgb(221, 17, 68);">'@tanbo/tbus'</span>;<br><br><strong style="color: rgb(51, 51, 51);">const</strong>&nbsp;editor = createEditor(<span style="color: rgb(0, 134, 179);">document</span>.getElementById(<span style="color: rgb(221, 17, 68);">'editor'</span>));<br>editor.onChange.subscribe(result =&gt; {<br>&nbsp;&nbsp;<span style="color: rgb(0, 134, 179);">console</span>.log(result);<br>})<br></pre>`
    });
  }

  ngOnDestroy() {
    this.appService.changeHeaderState(true);
  }
}
