import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UIModule } from '@tanbo/ui';

import { routes } from './forms.routes';

import { ButtonExampleComponent } from './button/button-example.component';
import { InputExampleComponent } from './input/input-example.component';
import { PaginationExampleComponent } from './pagination/pagination-example.component';
import { PickerExampleComponent } from './picker/picker-example.component';
import { PickerDemoComponent } from './picker/picker-demo.component';
import { RadioExampleComponent } from './radio/radio-example.component';
import { CheckboxExampleComponent } from './checkbox/checkbox-example.component';
import { RangeExampleComponent } from './range/range-example.component';
import { DateExampleComponent } from './date/date-example.component';
import { EditorExampleComponent } from './editor/editor-example.component';
import { FileExampleComponent } from './file/file-example.component';
import { MarkdownEditorExampleComponent } from './markdown-editor/markdown-editor-example.component';
import { SelectExampleComponent } from './select/select-example.component';
import { SwitchExampleComponent } from './switch/switch-example.component';
import { ComponentsModule } from '../../../modules/components.module';
import { DateDemo1Component } from './date/demo/demo1.component';
import { DateDemo2Component } from './date/demo/demo2.component';
import { DateDemo3Component } from './date/demo/demo3.component';
import { DateDemo4Component } from './date/demo/demo4.component';
import { DateDemo5Component } from './date/demo/demo5.component';
import { DateDemo6Component } from './date/demo/demo6.component';
import { FileDemo2Component } from './file/demo2.component';
import { EditorDemo1Component } from './editor/demo1.component';
import { PickerDemo1Component } from './picker/picker-demo1.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    UIModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    ButtonExampleComponent,
    InputExampleComponent,
    PaginationExampleComponent,
    PickerExampleComponent,
    PickerDemoComponent,
    PickerDemo1Component,
    RadioExampleComponent,
    CheckboxExampleComponent,
    RangeExampleComponent,
    DateExampleComponent,
    EditorExampleComponent,
    EditorDemo1Component,
    FileExampleComponent,
    FileDemo2Component,
    DateDemo1Component,
    DateDemo2Component,
    DateDemo3Component,
    DateDemo4Component,
    DateDemo5Component,
    DateDemo6Component,
    SelectExampleComponent,
    SwitchExampleComponent,
    MarkdownEditorExampleComponent
  ]
})
export class FormModule {
}
