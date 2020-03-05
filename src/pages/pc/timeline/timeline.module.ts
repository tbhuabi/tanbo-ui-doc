import { NgModule } from '@angular/core';
import { UIModule } from '@tanbo/ui';
import { RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';
import { routes } from './timeline.routes';
import { ComponentsModule } from '../../../modules/components.module';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    TimelineComponent
  ]
})
export class TimelineModule {
}
