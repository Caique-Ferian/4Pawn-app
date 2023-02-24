import User from '@app/entities/user/user';
import { UserHTTP } from './types';
export default class UserViewModule {
    static toHTTP(user: User): UserHTTP;
}
