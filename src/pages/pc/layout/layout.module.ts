import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UIModule } from '@tanbo/ui';

import { routes } from './layout.routes';

import { DropdownExampleComponent } from './dropdown/dropdown-example.component';
import { PanelExampleComponent } from './panel/panel-example.component';
import { TabExampleComponent } from './tab/tab-example.component';
import { ToolbarExampleComponent } from './toolbar/toolbar-example.component';
import { ComponentsModule } from '../../../modules/components.module';
import { DropdownInputExampleComponent } from './dropdown/dropdown-input-example.component';

@NgModule({
  imports: [
    UIModule,
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    DropdownExampleComponent,
    DropdownInputExampleComponent,
    PanelExampleComponent,
    TabExampleComponent,
    ToolbarExampleComponent
  ]
})
export class LayoutModule {
}
