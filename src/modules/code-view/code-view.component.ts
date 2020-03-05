import { AfterViewInit, Input, Component, ElementRef, HostBinding, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements AfterViewInit {
  @ViewChild('content', {static: true}) el: ElementRef;
  showToolbar = false;
  @HostBinding('class.open')
  open = false;
  @Input()
  maxHeight = 240;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      if (this.el.nativeElement.scrollHeight > this.maxHeight) {
        this.showToolbar = true;
      } else {
        this.open = true;
      }
    });
  }

  change() {
    this.open = !this.open;
  }
}
