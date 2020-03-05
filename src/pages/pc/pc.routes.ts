import { Routes } from '@angular/router';

import { PcComponent } from './pc.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'start',
  pathMatch: 'full'
}, {
  path: '',
  component: PcComponent,
  children: [{
    path: 'start',
    component: StartComponent
  }, {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(mod => mod.FormModule)
  }, {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
  }, {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then(mod => mod.ModalModule)
  }, {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(mod => mod.OtherModule)
  }, {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(mod => mod.TableModule)
  }, {
    path: 'nav',
    loadChildren: () => import('./nav/nav.module').then(mod => mod.NavModule)
  }, {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module').then(mod => mod.TreeModule)
  }, {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then(mod => mod.TimelineModule)
  }, {
    path: 'step',
    loadChildren: () => import('./step/step.module').then(mod => mod.StepModule)
  }]
}];
