import { Component } from '@angular/core';
import { StateManager } from "../../services/state-manager/state-manager.service";
import { BaseComponent } from "../../utilities/base-component";
import { AuthService } from "../../services/authService/auth-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  constructor(
    private stateService: StateManager,
    private authService: AuthService
  ) {
    super();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isTokenValid();
  }

}
