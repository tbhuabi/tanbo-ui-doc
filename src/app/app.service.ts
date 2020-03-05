import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {
  headerDisplayState: Observable<boolean>;
  rightBtnDisplayState: Observable<boolean>;

  private headerStateEvent = new Subject<boolean>();
  private btnStateEvent = new Subject<boolean>();

  constructor() {
    this.headerDisplayState = this.headerStateEvent.asObservable();
    this.rightBtnDisplayState = this.btnStateEvent.asObservable();
  }

  changeHeaderState(state: boolean) {
    this.headerStateEvent.next(state);
  }

  changeBtnState(state: boolean) {
    this.btnStateEvent.next(state);
  }
}