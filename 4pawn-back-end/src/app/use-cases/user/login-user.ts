import UserRepository from '@app/repositories/user-repository';
import { LoginUserRequest, UserResponse } from './types';
import LoginUnsuccessful from './error/loginUnsuccessful';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class LoginUser {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: LoginUserRequest): Promise<UserResponse> {
    const { username, password } = request;

    const login = await this.userRepository.login(username, password);
    if (!login) throw new LoginUnsuccessful();
    return { user: login };
  }
}
