import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '@infra/auth/constants/jwt.constants';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<any> {
    if (payload.role !== 'admin') {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'To create or update a Pet you must be an administrator',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return payload;
  }
}
