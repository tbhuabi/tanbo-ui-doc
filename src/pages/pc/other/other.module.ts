import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIModule } from '@tanbo/ui';

import { routes } from './other.routes';

import { TooltipComponent } from './tooltip/tooltip.component';
import { PopConfirmComponent } from './pop-confirm/pop-confirm.component';
import { ProgressExampleComponent } from './progress/progress-example.component';
import { TagExampleComponent } from './tag/tag-example.component';
import { ComponentsModule } from '../../../modules/components.module';
import { CropperExampleComponent } from './cropper/cropper-example.component';
import { TagDemo1Component } from './tag/demo1.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoadingExampleComponent } from './loading/loading-example.component';
import { AnchorExampleComponent } from './anchor/anchor-example.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UIModule,
    ComponentsModule,
    CommonModule
  ],
  declarations: [
    TooltipComponent,
    PopConfirmComponent,
    ProgressExampleComponent,
    TagExampleComponent,
    TagDemo1Component,
    CropperExampleComponent,
    BreadcrumbComponent,
    LoadingExampleComponent,
    AnchorExampleComponent
  ]
})
export class OtherModule {
}
