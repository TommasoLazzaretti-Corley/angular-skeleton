import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export function RoleGuard(): CanActivateFn {
  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const expectedRole = next.data.expectedRole;

    // se non ho user sempre false

    // aggiungi check con service
    // if (this.authService.hasRole(expectedRole)) {
    if (expectedRole) { // mock

      // get user in storage
      // check user roles

      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  };
}
