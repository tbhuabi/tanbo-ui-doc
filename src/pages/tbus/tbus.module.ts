import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UI_ANCHOR_LINK_DISTANCE, UIModule } from '@tanbo/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../modules/components.module';
import { routes } from './tbus.routes';

import { TBusComponent } from './tbus.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    TBusComponent,
  ],
  providers: [{
    provide: UI_ANCHOR_LINK_DISTANCE,
    useValue: 70
  }]
})
export class TextBusModule {

}
