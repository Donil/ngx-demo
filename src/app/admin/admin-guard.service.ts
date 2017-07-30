import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router, Route, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../core/services';
import { UserRole } from '../core/models/user-role';

@Injectable()
export class AdminGuardService implements CanActivate, CanActivateChild {
  constructor(private usersService: UsersService,
              private router: Router) {
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot,
                          state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.usersService.currentUser && this.usersService.currentUser.role === UserRole.Admin) {
      return true;
    }
    const extras: NavigationExtras = {
      queryParams: {
        redirectUrl: state.url
      }
    };
    this.router.navigate(['/forbidden'], extras);
    return false;
  }
}
