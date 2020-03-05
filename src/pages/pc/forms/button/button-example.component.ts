import { Component } from '@angular/core';

@Component({
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent {
  loading = false;

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}