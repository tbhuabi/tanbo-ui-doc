import { Component } from '@angular/core';

@Component({
  templateUrl: './tbus.component.html',
  styleUrls: ['./tbus.component.scss']
})
export class TBusComponent {
  constructor() {
    location.replace('https://textbus.tanboui.com')
  }
}
