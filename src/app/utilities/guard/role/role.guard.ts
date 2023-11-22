import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export function RoleGuard(): CanActivateFn {
  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const expectedRole = next.data.expectedRole;

    // aggiungi check con service
    // if (this.authService.hasRole(expectedRole)) {
    if (expectedRole) { // mock
      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  };
}
