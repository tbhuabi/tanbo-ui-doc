import { NgModule } from '@angular/core';
import { CodeViewComponent } from './code-view/code-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeViewComponent
  ],
  exports: [
    CodeViewComponent
  ]
})
export class ComponentsModule {
}
