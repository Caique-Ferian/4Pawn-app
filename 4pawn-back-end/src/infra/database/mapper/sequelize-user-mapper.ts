import Email from '@app/entities/user/email';
import User from '@app/entities/user/user';
import { Users as UserSequelize } from '../entities/users/users.entity';
import Password from '@app/entities/user/password';

export default class SequelizeUserMapper {
  static toSequelize(user: User) {
    return {
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      email: user.email.value,
      password: user.password.value,
      role: user.role,
    };
  }

  static toDomain(user: UserSequelize) {
    return new User(
      {
        fullName: user.fullName,
        username: user.username,
        email: new Email(user.email),
        password: new Password(user.password),
        role: user.role,
      },
      user.id,
    );
  }
}
