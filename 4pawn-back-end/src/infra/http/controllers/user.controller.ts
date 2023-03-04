import CreateUser from '@app/use-cases/user/create-user';
import LoginUser from '@app/use-cases/user/login-user';
import UpdateUser from '@app/use-cases/user/update-user';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import CreateUserBody from '../dtos/user/create-user-body';
import UserViewModule from '../view-module/user-view-module';
import LoginUserBody from '../dtos/user/login-user-body';
import PatchEmailBody from '../dtos/user/patch-email-body';
import PatchPasswordBody from '../dtos/user/patch-password-body';
import {
  LoginUserRequest,
  LoginUserResponse,
  CreateOrUpdateUserResponse,
} from './types';
import { LoginAuthGuard } from '@infra/auth/passport/guards/login-auth.guard';

@Controller('users')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private loginUser: LoginUser,
    private updateUser: UpdateUser,
  ) {}

  @Post()
  async create(
    @Body() body: CreateUserBody,
  ): Promise<CreateOrUpdateUserResponse> {
    try {
      const { fullName, username, email, password, role } = body;
      const { user } = await this.createUser.execute({
        fullName,
        username,
        email,
        password,
        role,
      });
      return { user: UserViewModule.toHTTP(user) };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'User already exists in DB',
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  @UseGuards(LoginAuthGuard)
  @Post('auth/login')
  async login(
    @Body() body: LoginUserBody,
    @Request() req: LoginUserRequest,
  ): Promise<LoginUserResponse> {
    const { username, password } = body;
    const { token } = req.user;
    await this.loginUser.execute({ username, password });
    return { token };
  }
  @Patch('patch/email')
  async patchEmail(
    @Body() body: PatchEmailBody,
  ): Promise<CreateOrUpdateUserResponse> {
    try {
      const { username, email } = body;
      const { user } = await this.updateUser.execute({ username, email });
      return { user: UserViewModule.toHTTP(user) };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Username Not Found in DB',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  @Patch('patch/password')
  async patchPassword(
    @Body() body: PatchPasswordBody,
  ): Promise<CreateOrUpdateUserResponse> {
    try {
      const { username, password } = body;
      const { user } = await this.updateUser.execute({ username, password });
      return { user: UserViewModule.toHTTP(user) };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Username Not Found in DB',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
