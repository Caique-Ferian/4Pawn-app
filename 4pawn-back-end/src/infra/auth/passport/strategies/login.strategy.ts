import { Injectable, BadRequestException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import AuthRepository from '@infra/auth/repository/auth-repository';
import { AuthToken } from '@infra/auth/types';
import { Request } from 'express';

@Injectable()
export default class LoginStrategy extends PassportStrategy(Strategy, 'login') {
  authenticate(req: Request) {
    const { username, password } = req.body;
    if (username.length === 0 && password.length === 0) {
      throw new BadRequestException({
        message: [
          'Username field must be filled.',
          'Password field must be filled.',
        ],
      });
    } else if (username.length === 0) {
      throw new BadRequestException({
        message: ['Username field must be filled.'],
      });
    } else if (password.length === 0) {
      throw new BadRequestException({
        message: ['Password field must be filled.'],
      });
    }
    super.authenticate(req);
  }
  constructor(private authService: AuthRepository) {
    super();
  }

  async validate(username: string, password: string): Promise<AuthToken> {
    const user = await this.authService.validateUser(username, password);
    return user;
  }
}
