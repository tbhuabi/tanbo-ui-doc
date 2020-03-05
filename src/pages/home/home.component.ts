import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../../app/app.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.changeHeaderState(false);
  }

  ngOnDestroy() {
    this.appService.changeHeaderState(true);
  }
}