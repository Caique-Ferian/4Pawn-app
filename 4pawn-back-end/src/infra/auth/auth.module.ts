import { UsersModule } from '@infra/database/entities/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import AuthService from './auth.service';
import LoginStrategy from './passport/strategies/login.strategy';
import AuthRepository from './repository/auth-repository';
import JwtStrategy from './passport/strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [
    { provide: AuthRepository, useClass: AuthService },
    LoginStrategy,
    JwtStrategy,
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
