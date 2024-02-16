import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./components/shared.module";
import { NgxWebstorageModule } from "ngx-webstorage";
import { OAuthModule, provideOAuthClient } from "angular-oauth2-oidc";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

/**
 * amplify configuration
 */
// import awsAmplifyConfig from "./utilities/amplifyConfig";
// Amplify.configure(awsAmplifyConfig);  // Inizializza Amplify con la configurazione

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxWebstorageModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
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
