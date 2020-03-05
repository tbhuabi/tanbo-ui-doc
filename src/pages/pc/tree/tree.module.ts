import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UIModule } from '@tanbo/ui';

import { routes } from './tree.routes';

import { TreeComponent } from './tree.component';
import { ComponentsModule } from '../../../modules/components.module';
import { TreeDemo1Component } from './demo1.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule
  ],
  declarations: [
    TreeComponent,
    TreeDemo1Component
  ]
})
export class TreeModule {
}
