import UserRepository from '@app/repositories/user-repository';
import { LoginUserRequest, LoginUserResponse } from './types';
import LoginUnsuccessful from './error/loginUnsuccessful';

export default class LoginUser {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: LoginUserRequest): Promise<LoginUserResponse> {
    const { username, password } = request;

    const login = await this.userRepository.login(username, password);
    if (!login) throw new LoginUnsuccessful();
    return { user: login };
  }
}
