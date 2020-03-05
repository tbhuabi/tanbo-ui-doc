import { Component, AfterViewInit, ElementRef, Renderer2, OnDestroy, Input } from '@angular/core';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector2,
  CanvasTexture,
  Vector3,
  Points,
  Geometry,
  PointsMaterial
} from 'three';

@Component({
  selector: 'my-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit, OnDestroy {
  @Input()
  bgColor = '#1F6DB6';
  @Input()
  pointColor = '#fff';
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;

  amountX = 50;
  amountY = 50;
  separation = 200;

  n = 0;

  windowHalfX: number = window.innerWidth / 2;
  windowHalfY: number = window.innerHeight / 2;

  mouseX: number = 0;
  mouseY: number = 0;

  unbindFn: Function;

  animationId: number;

  constructor(private elementRef: ElementRef,
              private ngRenderer2: Renderer2) {
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;

    // 创建材质
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 64;
    const canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = this.pointColor;
    canvasContext.beginPath();
    canvasContext.arc(32, 32, 32, 0, Math.PI * 2);
    canvasContext.closePath();
    canvasContext.fill();
    const texture = new CanvasTexture(canvas);
    texture.center = new Vector2(7, 7);
    const material = new PointsMaterial({
      size: 20,
      map: texture,
      opacity: .6,
      transparent: true
    });

    // 创建场景
    this.scene = new Scene();
    this.scene.autoUpdate = true;

    // 创建模型

    for (let i = 0; i < this.amountX; i++) {
      for (let j = 0; j < this.amountY; j++) {
        const geometry = new Geometry();
        const vector = new Vector3(
          (i - this.amountX / 2) * this.separation - this.amountX / this.separation / 2,
          (( Math.sin((i + this.n) * 0.3) * 50 ) + ( Math.sin((j + this.n) * 0.5) * 50 ) - 200),
          j * this.separation - this.amountY / this.separation / 2);
        geometry.vertices.push(vector);
        // 实例化粒子对象
        const particle = new Points(geometry, material);

        this.scene.add(particle);
      }
    }

    // 创建相机
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 5000);
    this.camera.position.z = 10000;

    // 创建渲染器
    this.renderer = new WebGLRenderer();
    this.renderer.setClearColor(this.bgColor);
    this.renderer.setSize(window.innerWidth, element.offsetHeight);
    element.appendChild(this.renderer.domElement);
    this.animate();
    this.unbindFn = this.ngRenderer2.listen('document', 'mousemove', (event: any) => {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    this.unbindFn();
  }

  animate() {
    const arr = this.scene.children;
    this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.05;
    this.camera.position.y += ( -this.mouseY - this.camera.position.y ) * 0.03;
    if (this.camera.position.y < -100) {
      this.camera.position.y = -100;
    }
    this.camera.lookAt(this.scene.position);

    let index = 0;
    for (let i = 0; i < this.amountX; i++) {
      for (let j = 0; j < this.amountY; j++) {
        const point = arr[index];
        index++;
        if (point instanceof Points) {
          point.position.y = (( Math.sin((i + this.n) * 0.3) * 50 ) + ( Math.sin((j + this.n) * 0.5) * 50 ) - 100);
        }
      }
    }

    this.renderer.render(this.scene, this.camera);
    this.n += 0.15;
    this.animationId = requestAnimationFrame(() => {
      this.animate();
    });
  }
}
