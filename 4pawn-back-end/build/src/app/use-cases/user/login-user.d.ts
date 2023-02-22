import UserRepository from '@app/repositories/user-repository';
import { LoginUserRequest, UserResponse } from './types';
export default class LoginUser {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: LoginUserRequest): Promise<UserResponse>;
}
