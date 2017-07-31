import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CanComponentDiactivate } from './can-component-diactivate';

@Injectable()
export class CanDiactivateGuardService implements CanDeactivate<CanComponentDiactivate> {
  public canDeactivate(component: CanComponentDiactivate,
                       currentRoute: ActivatedRouteSnapshot,
                       currentState: RouterStateSnapshot,
                       nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDiactivate();
  }
}
