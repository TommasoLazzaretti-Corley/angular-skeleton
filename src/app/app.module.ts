import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./components/shared.module";

/**
 * amplify configuration
 */
// import awsAmplifyConfig from "./utilities/amplifyConfig";
// Amplify.configure(awsAmplifyConfig);  // Inizializza Amplify con la configurazione

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
