import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NativeComponent } from './native.component';

const routes: Routes = [{
    path: '',
    component: NativeComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);