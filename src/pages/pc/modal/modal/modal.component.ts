import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalController } from '@tanbo/ui';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
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
