import { Injectable, signal } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from "../state-manager/state-manager.service";

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  userInSession = signal<any>(null);

  constructor() {
    Auth.currentAuthenticatedUser().then((user: any) => {
      this.userSubject.next(user);
      this.userInSession.set(user)
    });
  }

  public getCurrentUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  public async signUp(username: string, password: string, attributes: any): Promise<any> {
    try {
      return await Auth.signUp({
        username,
        password,
        attributes
      });
    } catch (error) {
      throw error;
    }
  }

  public async confirmSignUp(username: string, code: string): Promise<any> {
    try {
      return await Auth.confirmSignUp(username, code);
    } catch (error) {
      throw error;
    }
  }

  public async signIn(username: string, password: string): Promise<any> {
    try {
      const user = await Auth.signIn(username, password);
      this.userSubject.next(user);
      this.userInSession.set(user)
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async signOut(): Promise<any> {
    try {
      await Auth.signOut();
      this.userSubject.next(null);
      this.userInSession.set(null)
    } catch (error) {
      throw error;
    }
  }

  public async resendConfirmationCode(username: string): Promise<any> {
    try {
      return await Auth.resendSignUp(username);
    } catch (error) {
      throw error;
    }
  }
}
