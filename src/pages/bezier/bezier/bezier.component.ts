import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotifyType, NotifyController } from '@tanbo/ui';
import { Bezier, BezierAnchor } from '@tanbo/bezier';

@Component({
  selector: 'x-bezier',
  templateUrl: './bezier.component.html',
  styleUrls: ['./bezier.component.scss']
})
export class BezierComponent implements OnInit {
  @ViewChild('canvas1', {static: true})
  bgCanvas: ElementRef;

  @ViewChild('canvas2', {static: true})
  lineCanvas: ElementRef;

  bezier: Bezier;
  progress: number = 0;
  result = 0;
  args = '-.9, -.7, -.1, .4, .1, -.6, .2, -1, .5, .6, .5, 1.3, 0, .9, -1, 1';

  get left() {
    return this.result * 100 + '%';
  }

  private bgCanvasContext: CanvasRenderingContext2D;
  private lineCanvasContext: CanvasRenderingContext2D;

  private prevPoint: BezierAnchor;

  constructor(private notifyController: NotifyController) {
  }

  ngOnInit() {
    const bgCanvas = this.bgCanvas.nativeElement;
    const lineCanvas = this.lineCanvas.nativeElement;

    bgCanvas.width = bgCanvas.height = 640;
    lineCanvas.width = lineCanvas.height = 640;

    this.bgCanvasContext = bgCanvas.getContext('2d');
    this.lineCanvasContext = lineCanvas.getContext('2d');
    this.bgCanvasContext.translate(320, 320);
    this.lineCanvasContext.translate(320, 320);
    this.bezier = new Bezier(this.parseArgs());
    this.run();
  }

  parseArgs() {
    let arr = this.args.replace(/\s+/g, '').split(',');
    const result: number[] = [];
    for (let item of arr) {
      const n = Number(item);
      if (isNaN(n)) {
        this.notifyController.push({
          content: '你输入了非数字',
          type: NotifyType.Warning
        });
        return [];
      } else {
        result.push(n);
      }
    }
    if (result.length < 4 || result.length % 2 !== 0) {
      this.notifyController.push({
        content: '参数个数有误或少于4个',
        type: NotifyType.Warning
      });
    }
    return result;
  }

  run() {
    this.lineCanvasContext.clearRect(-320, -320, 640, 640);
    this.bgCanvasContext.clearRect(-320, -320, 640, 640);
    this.lineCanvasContext.closePath();
    this.prevPoint = null;
    this.progress = 0;
    const fn = () => {
      if (this.progress < 100) {
        this.progress += 1;
        this.change(this.progress);
        requestAnimationFrame(fn);
      }
    };
    this.change(this.progress);
    fn();
  }

  drawBezier(point: BezierAnchor) {
    const context = this.lineCanvasContext;
    const bgContext = this.bgCanvasContext;
    context.clearRect(-320, -320, 640, 640);
    if (!this.prevPoint) {
      context.beginPath();
      context.moveTo(point.x * 300, point.y * 300);
    } else {
      context.lineTo(point.x * 300, point.y * 300);
    }
    this.prevPoint = point;
    context.strokeStyle = '#f90';
    context.stroke();

    bgContext.beginPath();
    bgContext.fillStyle = '#f90';
    bgContext.arc(point.x * 300, point.y * 300, 6, 0, Math.PI * 2);
    bgContext.closePath();
    bgContext.fill();
  }

  drawBg() {
    const context = this.bgCanvasContext;
    for (let i = 0; i < 21; i++) {
      context.strokeStyle = '#dfdfdf';
      context.beginPath();
      context.moveTo(i * 30 - 300, -300);
      context.lineTo(i * 30 - 300, 300);
      context.closePath();
      context.stroke();

      context.beginPath();
      context.moveTo(-300, i * 30 - 300);
      context.lineTo(300, i * 30 - 300);
      context.closePath();
      context.stroke();
    }

    context.strokeStyle = '#000';
    context.beginPath();
    context.moveTo(0, -300);
    context.lineTo(0, 300);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(-300, 0);
    context.lineTo(300, 0);
    context.closePath();
    context.stroke();
  }

  drawLine(startPoint: BezierAnchor, endPoint: BezierAnchor) {
    const context = this.bgCanvasContext;

    context.strokeStyle = '#bbb';
    context.beginPath();
    context.moveTo(startPoint.x * 300, startPoint.y * 300);
    context.lineTo(endPoint.x * 300, endPoint.y * 300);
    context.closePath();
    context.stroke();
  }

  drawPoint(point: BezierAnchor) {
    const context = this.bgCanvasContext;
    context.beginPath();
    context.arc(point.x * 300, point.y * 300, 3, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = '#f90';
    context.fill();
  }

  change(n: number) {
    const context = this.bgCanvasContext;
    context.clearRect(-320, -320, 640, 640);

    context.strokeStyle = '#1296db';
    context.beginPath();
    context.moveTo(n * 3, 320);
    context.lineTo(n * 3, -320);
    context.closePath();
    context.stroke();

    this.drawBg();
    const b = this.bezier.update(n / 100, anchors => {
      for (let i = 1; i < anchors.length; i++) {
        const prev = anchors[i - 1];
        const current = anchors[i];
        this.drawLine(prev, current);
        this.drawPoint(prev);
        this.drawPoint(current);
      }
    });
    this.drawBezier(b);
    this.result = b.y;
  }
}
