import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserRepository from '@app/repositories/user-repository';
import User from '@app/entities/user/user';
import { AuthToken } from './types';

@Injectable()
export default class AuthService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<AuthToken> {
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

  private async tokenGeneration(payload: User): Promise<AuthToken> {
    return {
      token: this.jwtService.sign(
        {
          username: payload.username,
          role: payload.role,
        },
        { secret: 'jwtToken', expiresIn: '1d' },
      ),
    };
  }
}
