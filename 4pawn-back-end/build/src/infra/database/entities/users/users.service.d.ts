import { Users as UsersSequelize } from './users.entity';
import User from '@app/entities/user/user';
import UserRepository from '@app/repositories/user-repository';
export declare class UsersService implements UserRepository {
    private readonly usersRepository;
    constructor(usersRepository: typeof UsersSequelize);
    create(user: User): Promise<void>;
    hasUser(username: string): Promise<User | null>;
    login(username: string): Promise<User | null>;
    save(user: User): Promise<void>;
}
