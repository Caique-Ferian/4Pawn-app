import User from '@app/entities/user/user';
import { Users as UserSequelize } from '../entities/users/users.entity';
export default class SequelizeUserMapper {
    static toSequelize(user: User): {
        id: string;
        fullName: string;
        username: string;
        email: string;
        password: string;
        role: string;
    };
    static toDomain(user: UserSequelize): User;
}
