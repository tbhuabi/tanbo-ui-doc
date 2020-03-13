import { NgModule } from '@angular/core';
import { UIModule } from '@tanbo/ui';
import { RouterModule } from '@angular/router';
import { routes } from './drawer.routes';
import { DrawerExampleComponent } from './drawer-example.component';
import { ComponentsModule } from '../../../modules/components.module';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    DrawerExampleComponent
  ]
})
export class DrawerModule {

}
