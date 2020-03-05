import { NgModule } from '@angular/core';
import { StepComponent } from './step.component';
import { UIModule } from '@tanbo/ui';
import { RouterModule } from '@angular/router';
import { routes } from './step.routes';
import { ComponentsModule } from '../../../modules/components.module';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    StepComponent
  ]
})
export class StepModule {
}
