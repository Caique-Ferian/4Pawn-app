import { PetHTTP, UserHTTP } from '@infra/http/view-module/types';
import { Request } from 'express';
interface TokenAndRole {
    role: string;
    token: string;
}
export interface LoginUserRequest extends Request {
    user: TokenAndRole;
}
export interface LoginUserResponse {
    token: string;
    role: string;
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
