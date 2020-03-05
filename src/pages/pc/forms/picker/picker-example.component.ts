import { Component } from '@angular/core';
import { PickerCell } from '@tanbo/ui';

import { address } from './address';

@Component({
  templateUrl: './picker-example.component.html'
})
export class PickerExampleComponent {
  options: PickerCell[] = address;

  selectedAddress: PickerCell[];

  get result() {
    if (this.selectedAddress) {
      return this.selectedAddress.map(item => {
        return {
          label: item.label,
          value: item.value
        };
      });
    }
  }
}
