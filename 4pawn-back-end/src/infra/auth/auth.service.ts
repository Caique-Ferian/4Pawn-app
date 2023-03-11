import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserRepository from '@app/repositories/user-repository';
import User from '@app/entities/user/user';
import { AuthToken } from './types';
import AuthRepository from './repository/auth-repository';

@Injectable()
export default class AuthService implements AuthRepository {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<AuthToken> {
    const user = await this.usersRepository.hasUser(username);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Invalid Username!',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (user.password.value === password) {
      return this.tokenGeneration(user);
    }
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'Invalid Password!',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }

  public async tokenGeneration(payload: User): Promise<AuthToken> {
    return {
      role: payload.role,
      token: this.jwtService.sign({
        username: payload.username,
        role: payload.role,
      }),
    };
  }
}
