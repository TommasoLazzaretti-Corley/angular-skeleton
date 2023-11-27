import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { StateManager } from "../state-manager/state-manager.service";
import { MapperConfiguration, MappingPair } from "@dynamic-mapper/mapper";

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  stateManager = inject(StateManager);

  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  login() {
    // chiameresti API qui ?
    this.isAuthenticatedSubject.next(true);

    const SourceToDestination = new MappingPair<object, object>();
    let user = new MapperConfiguration(cfg => {
      // maps only "bar" property
      cfg.createMap(SourceToDestination, {
        bar: opt => opt.mapFrom(src => src.foo)
      });
    });

    this.stateManager.setState({ user: {} })
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.stateManager.setState({ isLoading: true })
    this.stateManager.setState({ user: null })
  }

}
