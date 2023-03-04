import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import AuthRepository from '@infra/auth/repository/auth-repository';
import { AuthToken } from '@infra/auth/types';

@Injectable()
export default class LoginStrategy extends PassportStrategy(Strategy, 'login') {
  constructor(private authService: AuthRepository) {
    super();
  }

  async validate(username: string, password: string): Promise<AuthToken> {
    const user = await this.authService.validateUser(username, password);
    return user;
  }
}
