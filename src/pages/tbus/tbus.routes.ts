import { Routes } from '@angular/router';
import { TBusComponent } from './tbus.component';

export const routes: Routes = [{
  path: '',
  component: TBusComponent
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
