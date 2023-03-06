import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export default class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<any>;
}
export {};