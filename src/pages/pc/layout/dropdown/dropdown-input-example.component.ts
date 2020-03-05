import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-input',
  templateUrl: './dropdown-input-example.component.html'
})
export class DropdownInputExampleComponent {
  text = '';
  value = '';
  values: any[] = [{
    label: '选项A',
    value: 'A'
  }, {
    label: '选项B',
    value: 'B'
  }, {
    label: '选项C',
    value: 'C'
  }];

  setValue(item?: any) {
    if (item) {
      this.text = item.label;
      this.value = item.value;
    } else {
      this.text = '';
      this.value = '';
    }
  }
}