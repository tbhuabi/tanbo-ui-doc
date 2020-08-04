import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'native',
  loadChildren: () => import('../pages/native/native.module').then(mod => mod.NativeModule)
}, {
  path: 'ui',
  loadChildren: () => import('../pages/pc/pc.module').then(mod => mod.PcModule)
}, {
  path: 'bezier',
  loadChildren: () => import('../pages/bezier/bezier.module').then(mod => mod.BezierModule)
}, {
  path: 'textbus',
  loadChildren: () => import('../pages/tbus/tbus.module').then(mod => mod.TextBusModule)
}, {
  path: '**',
  redirectTo: 'textbus',
  pathMatch: 'full'
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
