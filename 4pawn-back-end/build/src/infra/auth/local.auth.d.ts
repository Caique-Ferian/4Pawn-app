import { Strategy } from 'passport-local';
import AuthRepository from './repository/auth-repository';
import { AuthToken } from './types';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export default class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthRepository);
    validate(username: string, password: string): Promise<AuthToken>;
}
export {};
