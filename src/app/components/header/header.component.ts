import { Component } from '@angular/core';
import { BaseComponent } from "../../utilities/base-component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {

  constructor() {
    super();
  }

}
