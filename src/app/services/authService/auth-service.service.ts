import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

/**
 * qui la configurazione per OAuth2
 */
export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://idsvr4.azurewebsites.net',
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home',
  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',
  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  responseType: 'code',
  postLogoutRedirectUri: window.location.origin + '/home',
  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.revokeTokenAndLogout().then((res) => console.log(res));
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  isTokenValid(): boolean {
    console.log("is token ", this.getAccessToken() ," valid : ", this.oauthService.hasValidAccessToken())
    return this.oauthService.hasValidAccessToken();
  }
}
