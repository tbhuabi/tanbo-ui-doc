import { Component, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = true;
  showBtn = false;
  demoUrl = '';

  @HostListener('window:message', ['$event'])
  message(event: any) {
    if (typeof event.data === 'string') {
      this.demoUrl = event.data;
    }
  }

  constructor(private router: Router,
              private appService: AppService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        document.documentElement.scrollTop = 0;
      }
    });
    this.appService.headerDisplayState.subscribe(b => {
      setTimeout(() => {
        this.showHeader = b;
      });
    });
    this.appService.rightBtnDisplayState.subscribe(b => {
      setTimeout(() => {
        this.showBtn = b;
      });
    });
  }
}
