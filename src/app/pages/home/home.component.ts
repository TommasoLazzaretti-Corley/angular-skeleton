import { Component, ViewEncapsulation } from '@angular/core';
import { StateManager } from "../../services/state-manager/state-manager.service";
import { BaseComponent } from "../../utilities/base-component";
import { timeout } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent extends BaseComponent {

  constructor(private stateService: StateManager) {
    super();
  }

  loaderWithDelay() {
    this.showLoader();

    setTimeout(() => this.hideLoader(), 3000)
  }

}
