import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

  onClick = () => {
    this.onClickEvent.emit()
  }

}
