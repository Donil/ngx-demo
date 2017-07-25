import { Injectable } from '@angular/core';
import { User } from '../../domain/models/user';
import { UserRole } from '../../domain/models/user-role';

const users: User[] = [
  {
    id: 1,
    name: 'User 1',
    role: UserRole.Client
  }
];

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
}
