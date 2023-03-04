import { JwtService } from '@nestjs/jwt';
import UserRepository from '@app/repositories/user-repository';
import User from '@app/entities/user/user';
import { AuthToken } from './types';
import AuthRepository from './repository/auth-repository';
export default class AuthService implements AuthRepository {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UserRepository, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<AuthToken>;
    tokenGeneration(payload: User): Promise<AuthToken>;
}
