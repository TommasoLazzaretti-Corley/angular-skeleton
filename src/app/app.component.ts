import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-skeleton';

  showModal = false;

  onContinue() {
    // Gestisci l'azione di continuazione qui
  }

  onCancel() {
    // Gestisci l'azione di cancellazione qui
  }

  customAction() {
    // Gestisci l'azione personalizzata qui
  }
}
