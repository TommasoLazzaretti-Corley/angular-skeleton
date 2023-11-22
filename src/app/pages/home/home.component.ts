import { Component, effect } from '@angular/core';
import { StateManager } from "../../services/state-manager/state-manager.service";
import { BaseComponent } from "../../utilities/base-component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  constructor(private stateService: StateManager) {
    super();

    this.showLoader()

    effect(() => {
      console.log('state changed', this.stateService.appState());
    });
  }

}
