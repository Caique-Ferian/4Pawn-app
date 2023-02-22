import { Module } from '@nestjs/common';
import { usersProvider } from './users.provider';
import { UsersService } from './users.service';
import UserRepository from '@app/repositories/user-repository';

@Module({
  providers: [
    ...usersProvider,
    { provide: UserRepository, useClass: UsersService },
  ],
  exports: [UserRepository, ...usersProvider],
})
export class UsersModule {}
