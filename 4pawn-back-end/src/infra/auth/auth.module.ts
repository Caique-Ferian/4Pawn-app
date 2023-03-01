import { UsersModule } from '@infra/database/entities/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import AuthService from './auth.service';
import LocalStrategy from './local.auth';

@Module({
  imports: [PassportModule, UsersModule, JwtModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
