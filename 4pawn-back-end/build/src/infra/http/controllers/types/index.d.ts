import { PetHTTP, UserHTTP } from '@infra/http/view-module/types';
import { Request } from 'express';
interface Token {
    token: string;
}
export interface LoginUserRequest extends Request {
    user: Token;
}
export interface LoginUserResponse {
    token: string;
}
export interface CreateOrUpdateUserResponse {
    user: UserHTTP;
}
export interface CreateOrUpdatePetResponse {
    pet: PetHTTP;
}
export interface FindAllPetsResponse {
    pets: PetHTTP[];
}
export {};
