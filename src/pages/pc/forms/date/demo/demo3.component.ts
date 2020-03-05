import { Component } from '@angular/core';

@Component({
  selector: 'date-demo3',
  templateUrl: './demo3.component.html'
})
export class DateDemo3Component {
  minDate = new Date();
  maxDate: Date;

  minTime = '9:00:00';
  maxTime = '17:00:00';

  constructor() {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    this.maxDate = date;
  }
}
