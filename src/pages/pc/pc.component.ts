import { Component } from '@angular/core';

@Component({
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})
export class PcComponent {
  version = process.env.VERSION;
  thumbnail = false;

  constructor() {
    this.thumbnail = localStorage.getItem('thumbnail') === 'true';
  }

  toggle() {
    this.thumbnail = !this.thumbnail;
    localStorage.setItem('thumbnail', this.thumbnail + '');
  }
}
