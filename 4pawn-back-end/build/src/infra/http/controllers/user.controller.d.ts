import CreateUser from '@app/use-cases/user/create-user';
import LoginUser from '@app/use-cases/user/login-user';
import UpdateUser from '@app/use-cases/user/update-user';
export declare class UserController {
    private createUser;
    constructor(createUser: CreateUser, loginUser: LoginUser, updateUser: UpdateUser);
    getHello(): string;
}
