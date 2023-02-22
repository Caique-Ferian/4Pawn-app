import UserRepository from '@app/repositories/user-repository';
import UserNotFound from './error/userNotFound';
import { UpdateUserRequest, UserResponse } from './types';
import Email from '@app/entities/user/email';
import Password from '@app/entities/user/password';
import User from '@app/entities/user/user';

export default class UpdateUser {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: UpdateUserRequest): Promise<UserResponse> {
    const { username, password, email } = request;
    const hasUser = await this.userRepository.hasUser(username);
    let updatedUser: User;
    if (!hasUser) throw new UserNotFound();
    if (email) {
      updatedUser = new User(
        {
          fullName: hasUser.fullName,
          username: hasUser.username,
          password: hasUser.password,
          email: new Email(email),
        },
        hasUser.id,
      );
    }
    if (password) {
      updatedUser = new User(
        {
          fullName: hasUser.fullName,
          username: hasUser.username,
          password: new Password(password),
          email: hasUser.email,
        },
        hasUser.id,
      );
    }
    await this.userRepository.save(updatedUser);
    return { user: updatedUser };
  }
}
