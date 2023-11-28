import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'angular-skeleton';

  showModal = false;

  ngOnInit(): void {
    initFlowbite();
  }

  onContinue() {
    // Gestisci l'azione di continuazione qui
    this.showModal = false;
  }

  onCancel() {
    // Gestisci l'azione di cancellazione qui
    this.showModal = false;
  }

  customAction() {
    // Gestisci l'azione personalizzata qui
    this.showModal = false;
  }
}
