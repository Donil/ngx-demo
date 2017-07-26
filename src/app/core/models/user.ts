import { UserRole } from './user-role';

/**
 * User model.
 */
export class User {
  /**
   * User Id.
   */
  public id: number;

  /**
   * User name.
   */
  public name: string;

  /**
   * User role.
   */
  public role: UserRole;
}
