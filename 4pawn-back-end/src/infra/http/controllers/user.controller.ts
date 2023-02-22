import CreateUser from '@app/use-cases/user/create-user';
import LoginUser from '@app/use-cases/user/login-user';
import UpdateUser from '@app/use-cases/user/update-user';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(
    private createUser: CreateUser,
    loginUser: LoginUser,
    updateUser: UpdateUser,
  ) {}

  @Get()
  getHello(): string {
    return 'NEW CONTROLLER';
  }
}
