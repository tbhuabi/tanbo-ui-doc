import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppService } from '../../app/app.service';

@Component({
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss']
})
export class NativeComponent implements OnInit, OnDestroy {
  @ViewChild('child', {static: true})
  childIFrame: ElementRef;
  src: any = this.domSanitizer.bypassSecurityTrustResourceUrl(
    process.env.ENV === 'production' ?
      '//native.tanboui.com' :
      `//${process.env.IP}:8900/`);

  data: any;

  transform: number = 1;
  rightDistance: number = 400;

  private contentWindow: any;
  private htmlElement: HTMLElement;

  constructor(private domSanitizer: DomSanitizer,
              private appService: AppService) {
  }

  ngOnInit() {
    this.appService.changeBtnState(true);
    this.contentWindow = this.childIFrame.nativeElement.contentWindow;
    this.htmlElement = document.documentElement;
    this.resize();
  }

  ngOnDestroy() {
    this.appService.changeBtnState(false);
  }

  @HostListener('window:message', ['$event'])
  message(event: any) {
    if (typeof event.data === 'string') {
      return;
    }
    document.documentElement.scrollTop = 0;
    this.data = event.data;
  }

  @HostListener('window:resize')
  resize() {
    if (!this.htmlElement) {
      return;
    }
    let docHeight = this.htmlElement.getBoundingClientRect().height;
    let n = docHeight / 860;
    n = n > 1 ? 1 : n;
    this.transform = n;
    this.rightDistance = 400 * n + 20;
  }
}
