import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserRole } from '../models/user-role';

const users: User[] = [{
    id: 1,
    name: 'User 1',
    role: UserRole.Client
  }, {
    id: 2,
    name: 'User 2',
    role: UserRole.Client
  }];

/**
 * Users service.
 */
@Injectable()
export class UsersService {
  constructor() {
  }

  public getUsers(): User[] {
    return users;
  }

  public getUser(id: number): User {
    return users.find(u => u.id === id);
  }
}
