import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./components/shared.module";
import { NgxWebstorageModule } from "ngx-webstorage";
import { OAuthModule, provideOAuthClient } from "angular-oauth2-oidc";
import { provideHttpClient } from "@angular/common/http";

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
    SharedModule,
    NgxWebstorageModule.forRoot(),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://api.example.com', 'http://localhost:4200'],
        sendAccessToken: true,
      },
    }),
  ],
  providers: [
    provideHttpClient(),
    provideOAuthClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
