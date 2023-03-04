import { Strategy } from 'passport-local';
import AuthRepository from '@infra/auth/repository/auth-repository';
import { AuthToken } from '@infra/auth/types';
declare const LoginStrategy_base: new (...args: any[]) => Strategy;
export default class LoginStrategy extends LoginStrategy_base {
    private authService;
    constructor(authService: AuthRepository);
    validate(username: string, password: string): Promise<AuthToken>;
}
export {};
