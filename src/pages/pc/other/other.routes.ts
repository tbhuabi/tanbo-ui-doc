import { Routes } from '@angular/router';

import { TooltipComponent } from './tooltip/tooltip.component';
import { PopConfirmComponent } from './pop-confirm/pop-confirm.component';
import { ProgressExampleComponent } from './progress/progress-example.component';
import { TagExampleComponent } from './tag/tag-example.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoadingExampleComponent } from './loading/loading-example.component';
import { AnchorExampleComponent } from './anchor/anchor-example.component';

export const routes: Routes = [{
  path: 'tooltip',
  component: TooltipComponent
}, {
  path: 'pop-confirm',
  component: PopConfirmComponent
}, {
  path: 'progress',
  component: ProgressExampleComponent
}, {
  path: 'tag',
  component: TagExampleComponent
}, {
  path: 'breadcrumb',
  component: BreadcrumbComponent
}, {
  path: 'loading',
  component: LoadingExampleComponent
}, {
  path: 'anchor',
  component: AnchorExampleComponent
}];
