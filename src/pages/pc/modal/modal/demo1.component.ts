import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalController } from '@tanbo/ui';

@Component({
  selector: 'modal-demo1',
  templateUrl: './demo1.component.html'
})
export class ModalDemo1Component {
  @ViewChild('demoModal', {read: TemplateRef, static: true})
  demoModal: TemplateRef<any>;

  constructor(private modalController: ModalController) {
  }

  showModal() {
    this.modalController.show(this.demoModal);
  }

  hideModal() {
    this.modalController.hide();
  }

}
