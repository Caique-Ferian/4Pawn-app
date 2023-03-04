import User from '@app/entities/user/user';
import { AuthToken } from '@infra/auth/types';
export default abstract class AuthRepository {
    abstract validateUser(username: string, password: string): Promise<AuthToken>;
    abstract tokenGeneration(payload: User): Promise<AuthToken>;
}
