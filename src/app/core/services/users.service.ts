import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { UserRole } from '../models/user-role';

const users: User[] = [{
    id: 1,
    name: 'User 1',
    email: 'client1@mail.com',
    role: UserRole.Client
  }, {
    id: 2,
    name: 'User 2',
    email: 'client2@mail.com',
    role: UserRole.Client
  }, {
    id: 3,
    name: 'Admin',
    email: 'admin@mail.com',
    role: UserRole.Admin
  }];

const REQUEST_DELAY = 1000; // Delay for emulate of long requset

/**
 * Users service.
 */
@Injectable()
export class UsersService {
  private _currentUser: User;

  public get currentUser(): User {
    return this._currentUser;
  }

  constructor() {
  }

  public login(email: string, password: string): Observable<User> {
    this._currentUser = users.find(u => u.email === email);
    return Observable.of(this._currentUser)
      .delay(REQUEST_DELAY);
  }

  public getUsers(): Observable<User[]> {
    return Observable.of(users)
      .delay(REQUEST_DELAY);
  }

  public getUser(id: number): Observable<User> {
    const user = users.find(u => u.id === id);
    return Observable.of(user)
      .delay(REQUEST_DELAY);
  }
}
