import { Component } from '@angular/core';

@Component({
  selector: 'nav-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class NavDemo2Component {
  thumbnail = localStorage.getItem('navThumbnail') === 'true';

  change() {
    this.thumbnail = !this.thumbnail;
    localStorage.setItem('navThumbnail', this.thumbnail + '');
  }
}
