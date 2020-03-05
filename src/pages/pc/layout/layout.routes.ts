import { Routes } from '@angular/router';

import { DropdownExampleComponent } from './dropdown/dropdown-example.component';
import { PanelExampleComponent } from './panel/panel-example.component';
import { TabExampleComponent } from './tab/tab-example.component';
import { ToolbarExampleComponent } from './toolbar/toolbar-example.component';

export const routes: Routes = [{
  path: 'dropdown',
  component: DropdownExampleComponent
}, {
  path: 'panel',
  component: PanelExampleComponent
}, {
  path: 'tab',
  component: TabExampleComponent
}, {
  path: 'toolbar',
  component: ToolbarExampleComponent
}];