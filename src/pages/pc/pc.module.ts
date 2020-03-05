import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIModule, UI_ANCHOR_LINK_DISTANCE } from '@tanbo/ui';

import { routes } from './pc.routes';

import { PcComponent } from './pc.component';
import { StartComponent } from './start/start.component';
import { ComponentsModule } from '../../modules/components.module';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    PcComponent,
    StartComponent
  ],
  providers: [{
    provide: UI_ANCHOR_LINK_DISTANCE,
    useValue: 70
  }]
})
export class PcModule {
}
