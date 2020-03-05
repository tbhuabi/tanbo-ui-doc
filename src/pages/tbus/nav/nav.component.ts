import { Component } from '@angular/core';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  version = process.env.EDITOR_VERSION;
  thumbnail = false;

  constructor() {
    this.thumbnail = localStorage.getItem('thumbnail') === 'true';
  }

  toggle() {
    this.thumbnail = !this.thumbnail;
    localStorage.setItem('thumbnail', this.thumbnail + '');
  }
}
