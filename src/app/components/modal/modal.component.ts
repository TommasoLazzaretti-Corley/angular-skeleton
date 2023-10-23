import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() showModal: boolean = false;
  @Output() continueClicked = new EventEmitter();
  @Output() cancelClicked = new EventEmitter();
  @Output() closed = new EventEmitter();

  onCancel() {
    this.cancelClicked.emit();
    this.closeModal();
  }

  onContinue() {
    this.continueClicked.emit();
    this.closeModal();
  }

  onClose() {
    this.closeModal();
  }

  onOutsideClick() {
    this.closeModal();
  }

  closeModal() {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeydown(event: KeyboardEvent) {
    this.closeModal();
  }
}
