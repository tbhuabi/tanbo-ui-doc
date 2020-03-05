import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UIModule, UI_ANCHOR_LINK_DISTANCE } from '@tanbo/ui';
import { FormsModule } from '@angular/forms';

import { routes } from './bezier.routes';

import { DocComponent } from './doc/doc.component';
import { BezierComponent } from './bezier/bezier.component';
import { CubicBezierComponent } from './cubic-bezier/cubic-bezier.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DocComponent,
    BezierComponent,
    CubicBezierComponent
  ],
  providers: [{
    provide: UI_ANCHOR_LINK_DISTANCE,
    useValue: 70
  }]
})
export class BezierModule {

}