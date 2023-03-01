import { JwtService } from '@nestjs/jwt';
import UserRepository from '@app/repositories/user-repository';
export default class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UserRepository, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    private tokenGeneration;
}
