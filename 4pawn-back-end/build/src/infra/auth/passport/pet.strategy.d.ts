import { Strategy } from 'passport-local';
import AuthRepository from '../repository/auth-repository';
declare const PetStrategy_base: new (...args: any[]) => Strategy;
export default class PetStrategy extends PetStrategy_base {
    private authService;
    constructor(authService: AuthRepository);
    validate(token: string): Promise<any>;
}
export {};
