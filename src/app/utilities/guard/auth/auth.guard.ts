import { CanActivateChildFn, CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";

import { AuthService } from '../services/auth.service';

export function authenticationGuard(): CanActivateFn {
  return () => {
    return checkUserLogged();
  };
}

export function authenticationGuardChild(): CanActivateChildFn {
  return () => {
    return checkUserLogged();
  };
}

function checkUserLogged() {
  const oauthService: AuthService = inject(AuthService);
  return !!oauthService.hasAccess();
}

// possibile esempio con token
/**
const canActivateTeam: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PermissionsService).canActivate(inject(UserToken), route.params['id']);
  };
**/
