import UserRepository from '@app/repositories/user-repository';
import { CreateUserRequest, UserResponse } from './types';
import User from '@app/entities/user/user';
import Password from '@app/entities/user/password';
import Email from '@app/entities/user/email';
import UserAlreadyExists from './error/userAlreadyExists';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CreateUser {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: CreateUserRequest): Promise<UserResponse> {
    const { fullName, username, password, email, role } = request;

    const hasUser = await this.userRepository.hasUser(username);
    if (hasUser) throw new UserAlreadyExists();
    const user = new User({
      fullName,
      username,
      password: new Password(password),
      email: new Email(email),
      role,
    });
    await this.userRepository.create(user);
    return { user };
  }
}
