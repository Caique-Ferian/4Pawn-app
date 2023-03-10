import CreateUser from '@app/use-cases/user/create-user';
import LoginUser from '@app/use-cases/user/login-user';
import UpdateUser from '@app/use-cases/user/update-user';
import CreateUserBody from '../dtos/user/create-user-body';
import LoginUserBody from '../dtos/user/login-user-body';
import PatchEmailBody from '../dtos/user/patch-email-body';
import PatchPasswordBody from '../dtos/user/patch-password-body';
import { LoginUserRequest, LoginUserResponse, CreateOrUpdateUserResponse } from './types';
export declare class UserController {
    private createUser;
    private loginUser;
    private updateUser;
    constructor(createUser: CreateUser, loginUser: LoginUser, updateUser: UpdateUser);
    create(body: CreateUserBody): Promise<CreateOrUpdateUserResponse>;
    login(body: LoginUserBody, req: LoginUserRequest): Promise<LoginUserResponse>;
    patchEmail(body: PatchEmailBody): Promise<CreateOrUpdateUserResponse>;
    patchPassword(body: PatchPasswordBody): Promise<CreateOrUpdateUserResponse>;
}
