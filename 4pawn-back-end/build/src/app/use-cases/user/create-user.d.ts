import UserRepository from '@app/repositories/user-repository';
import { CreateUserRequest, UserResponse } from './types';
export default class CreateUser {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: CreateUserRequest): Promise<UserResponse>;
}
