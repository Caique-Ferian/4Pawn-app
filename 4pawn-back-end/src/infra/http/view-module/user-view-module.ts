import User from '@app/entities/user/user';
import { UserHTTP } from './types';

export default class UserViewModule {
  static toHTTP(user: User): UserHTTP {
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email.value,
      role: user.role,
    };
  }
}
