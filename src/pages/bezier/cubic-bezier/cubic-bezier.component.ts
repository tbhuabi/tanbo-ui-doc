import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BezierAnchor, CubicBezier } from '@tanbo/bezier';

@Component({
  selector: 'x-cubic-bezier',
  templateUrl: './cubic-bezier.component.html',
  styleUrls: ['./cubic-bezier.component.scss']
})
export class CubicBezierComponent implements OnInit {
  @ViewChild('canvas1', {static: true})
  bgCanvas: ElementRef;

  @ViewChild('canvas2', {static: true})
  lineCanvas: ElementRef;
  @ViewChild('canvas3', {static: true})
  controlCanvas: ElementRef;

  bezier: CubicBezier;
  progress: number = 0;
  result = 0;

  get left() {
    return this.result * 100 + '%';
  }

  bezierType: any = {
    ease: [0.25, 0.1, 0.25, 1],
    linear: [0, 0, 1, 1],
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    ios: [.36, .66, .04, 1]
  };
  type = 'ios';

  customParams = [0, 0, 1, 1];

  get btn1() {
    const type = this.customParams;
    return {
      left: type[0] * 300 + 'px',
      top: type[1] * -300 + 'px'
    };
  }

  get btn2() {
    const type = this.customParams;
    return {
      left: type[2] * 300 + 'px',
      top: type[3] * -300 + 'px'
    };
  }

  private bgCanvasContext: CanvasRenderingContext2D;
  private lineCanvasContext: CanvasRenderingContext2D;
  private controlCanvasContext: CanvasRenderingContext2D;

  private prevPoint: BezierAnchor;

  ngOnInit() {
    const bgCanvas = this.bgCanvas.nativeElement;
    const lineCanvas = this.lineCanvas.nativeElement;
    const controlCanvas = this.controlCanvas.nativeElement;

    bgCanvas.width = bgCanvas.height = 640;
    lineCanvas.width = lineCanvas.height = 640;
    controlCanvas.width = controlCanvas.height = 640;

    this.bgCanvasContext = bgCanvas.getContext('2d');
    this.lineCanvasContext = lineCanvas.getContext('2d');
    this.controlCanvasContext = controlCanvas.getContext('2d');

    this.bgCanvasContext.translate(20, 620);
    this.lineCanvasContext.translate(20, 620);
    this.controlCanvasContext.translate(20, 620);

    this.setBezierType(this.type);

    this.run();
  }

  update() {
    this.bezier = new CubicBezier(
      this.customParams[0],
      this.customParams[1],
      this.customParams[2],
      this.customParams[3]);
    this.drawControlLine(this.customParams);
  }

  setBezierType(type: string) {
    this.lineCanvasContext.clearRect(-20, -620, 640, 640);
    this.bgCanvasContext.clearRect(-20, -620, 640, 640);
    this.type = type;
    const t = this.bezierType[type] || this.bezierType.ios;
    this.bezier = new CubicBezier(t[0], t[1], t[2], t[3]);
    this.customParams = [t[0], t[1], t[2], t[3]];
    this.drawControlLine(this.customParams);
    this.drawBg();
  }

  drawControlLine(t: number[]) {
    const data = [0, 0, ...t, 1, 1];
    const context = this.controlCanvasContext;
    context.clearRect(-20, -620, 640, 640);

    context.beginPath();
    context.moveTo(data[0] * 600, data[1] * -600);
    for (let i = 2; i < data.length; i += 2) {
      context.lineTo(data[i] * 600, data[i + 1] * -600);
    }
    context.strokeStyle = '#888';
    context.stroke();
  }

  run() {
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
    context.clearRect(-20, -620, 640, 640);
    if (!this.prevPoint) {
      context.beginPath();
      context.moveTo(point.x * 600, point.y * -600);
    } else {
      context.lineTo(point.x * 600, point.y * -600);
    }
    this.prevPoint = point;
    context.strokeStyle = '#f90';
    context.stroke();

    bgContext.beginPath();
    bgContext.fillStyle = '#f90';
    bgContext.arc(point.x * 600, point.y * -600, 6, 0, Math.PI * 2);
    bgContext.closePath();
    bgContext.fill();
  }

  drawBg() {
    const context = this.bgCanvasContext;
    for (let i = 0; i < 11; i++) {
      context.strokeStyle = '#dfdfdf';
      context.beginPath();
      context.moveTo(i * 60, 0);
      context.lineTo(i * 60, -600);
      context.closePath();
      context.stroke();

      context.beginPath();
      context.moveTo(0, -i * 60);
      context.lineTo(600, -i * 60);
      context.closePath();
      context.stroke();
    }

    context.strokeStyle = '#000';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -600);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(600, 0);
    context.closePath();
    context.stroke();
  }

  drawLine(startPoint: BezierAnchor, endPoint: BezierAnchor) {
    const context = this.bgCanvasContext;

    context.strokeStyle = '#bbb';
    context.beginPath();
    context.moveTo(startPoint.x * 600, startPoint.y * -600);
    context.lineTo(endPoint.x * 600, endPoint.y * -600);
    context.closePath();
    context.stroke();
  }

  drawPoint(point: BezierAnchor) {
    const context = this.bgCanvasContext;
    context.beginPath();
    context.arc(point.x * 600, point.y * -600, 5, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = '#f90';
    context.fill();
  }

  change(n: number) {
    const context = this.bgCanvasContext;
    context.clearRect(-20, -620, 640, 640);

    context.strokeStyle = '#1296db';
    context.beginPath();
    context.moveTo(n * 6, -600);
    context.lineTo(n * 6, 0);
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
