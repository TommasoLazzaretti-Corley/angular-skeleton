import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from "../../utilities/base-component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent extends BaseComponent {

  constructor() {
    super();
  }

}
