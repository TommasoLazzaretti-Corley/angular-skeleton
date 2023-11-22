import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export function deactivationGuard(): CanDeactivateFn<any> {
  return (component: CanComponentDeactivate): boolean => {
    return component.canDeactivate ? component.canDeactivate() : true;
  };
}
