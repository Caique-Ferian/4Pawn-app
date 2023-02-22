import UserRepository from '@app/repositories/user-repository';
import { UpdateUserRequest, UserResponse } from './types';
export default class UpdateUser {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: UpdateUserRequest): Promise<UserResponse>;
}
