import { Routes } from '@angular/router' ;

import { ModalComponent } from './modal/modal.component';
import { NotifyComponent } from './notify/notify.component';
import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [{
  path: 'modal',
  component: ModalComponent
}, {
  path: 'notify',
  component: NotifyComponent
}, {
  path: 'dialog',
  component: DialogComponent
}];