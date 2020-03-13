import { Routes } from '@angular/router';

import { BaseStyleComponent } from './base-style/base-style.component';
import { ButtonExampleComponent } from './button/button-example.component';
import { InputExampleComponent } from './input/input-example.component';
import { PaginationExampleComponent } from './pagination/pagination-example.component';
import { PickerExampleComponent } from './picker/picker-example.component';
import { RadioExampleComponent } from './radio/radio-example.component';
import { CheckboxExampleComponent } from './checkbox/checkbox-example.component';
import { RangeExampleComponent } from './range/range-example.component';
import { DateExampleComponent } from './date/date-example.component';
import { EditorExampleComponent } from './editor/editor-example.component';
import { FileExampleComponent } from './file/file-example.component';
import { SelectExampleComponent } from './select/select-example.component';
import { SwitchExampleComponent } from './switch/switch-example.component';
import { MarkdownEditorExampleComponent } from './markdown-editor/markdown-editor-example.component';
import { SegmentExampleComponent } from './segment/segment-example.component';

export const routes: Routes = [{
  path: 'base-style',
  component: BaseStyleComponent
}, {
  path: 'button',
  component: ButtonExampleComponent
}, {
  path: 'input',
  component: InputExampleComponent
}, {
  path: 'radio',
  component: RadioExampleComponent
}, {
  path: 'pagination',
  component: PaginationExampleComponent
}, {
  path: 'picker',
  component: PickerExampleComponent
}, {
  path: 'checkbox',
  component: CheckboxExampleComponent
}, {
  path: 'range',
  component: RangeExampleComponent
}, {
  path: 'segment',
  component: SegmentExampleComponent
}, {
  path: 'file',
  component: FileExampleComponent
}, {
  path: 'date',
  component: DateExampleComponent
}, {
  path: 'editor',
  component: EditorExampleComponent
}, {
  path: 'select',
  component: SelectExampleComponent
}, {
  path: 'switch',
  component: SwitchExampleComponent
}, {
  path: 'markdown-editor',
  component: MarkdownEditorExampleComponent
}];
