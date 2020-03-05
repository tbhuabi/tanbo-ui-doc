import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIModule } from '@tanbo/ui';

import { routes } from './table.routes';

import { TableExampleComponent } from './table-example.component';
import { ComponentsModule } from '../../../modules/components.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UIModule,
    ComponentsModule
  ],
  declarations: [
    TableExampleComponent
  ]
})
export class TableModule {

}
