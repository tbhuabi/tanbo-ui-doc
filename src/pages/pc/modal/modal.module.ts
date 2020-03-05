import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIModule } from '@tanbo/ui';

import { routes } from './modal.routes';

import { ModalComponent } from './modal/modal.component';
import { NotifyComponent } from './notify/notify.component';
import { DialogComponent } from './dialog/dialog.component';
import { ComponentsModule } from '../../../modules/components.module';
import { ModalDemo1Component } from './modal/demo1.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    ModalComponent,
    NotifyComponent,
    DialogComponent,
    ModalDemo1Component
  ]
})
export class ModalModule {
}
