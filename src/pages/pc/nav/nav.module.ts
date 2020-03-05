import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIModule } from '@tanbo/ui';

import { routes } from './nav.routes';

import { NavComponent } from './nav.component';
import { ComponentsModule } from '../../../modules/components.module';
import { NavDemo1Component } from './demo1.component';
import { NavDemo2Component } from './demo2.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    NavComponent,
    NavDemo1Component,
    NavDemo2Component
  ]
})
export class NavModule {
}
