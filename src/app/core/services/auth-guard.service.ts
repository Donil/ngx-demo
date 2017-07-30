import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router, Route, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UsersService } from './users.service';
import { UserRole } from '../models/user-role';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private usersService: UsersService,
              private router: Router) {
  }

  private goToLoginPage(redirectUrl: string): void {
    const extras: NavigationExtras = {
      queryParams: {
        redirectUrl: redirectUrl
      }
    };
    this.router.navigate(['/login'], extras);
  }

  /**
   * @inheritdoc
   */
  public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if (this.usersService.currentUser) {
      return true;
    }
    this.goToLoginPage(route.path);
    return false;
  }

  /**
   * @inheritdoc
   */
  public canActivateChild(childRoute: ActivatedRouteSnapshot,
                          state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  /**
   * @inheritdoc
   */
  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.usersService.currentUser) {
      return true;
    }
    this.goToLoginPage(state.url);
    return false;
  }
}
