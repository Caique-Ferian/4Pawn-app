import UserRepository from '@app/repositories/user-repository';
import { CreateUserRequest, CreateUserResponse } from './types';
import User from '@app/entities/user/user';
import Password from '@app/entities/user/password';
import Email from '@app/entities/user/email';
import UserAlreadyExists from './error/userAlreadyExists';

export default class CreateUser {
  constructor(private userRepository: UserRepository) {}

  public async execute(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const { fullName, username, password, email } = request;

    const user = new User({
      fullName,
      username,
      password: new Password(password),
      email: new Email(email),
    });
    const hasUser = await this.userRepository.hasUser(username);
    if (hasUser?.fullName) throw new UserAlreadyExists();
    await this.userRepository.create(user);
    return { user };
  }
}