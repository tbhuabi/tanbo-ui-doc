import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '@tanbo/ui';

import { routing } from './native.routing';
import { NativeComponent } from './native.component';
import { DocViewComponent } from './doc-view/doc-view';

@NgModule({
  imports: [
    CommonModule,
    routing,
    UIModule
  ],
  declarations: [
    DocViewComponent,
    NativeComponent
  ]
})
export class NativeModule {
}
