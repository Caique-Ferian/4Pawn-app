import User from '@app/entities/user/user';
export interface CreateUserRequest {
    fullName: string;
    username: string;
    password: string;
    email: string;
}
export interface LoginUserRequest {
    username: string;
    password: string;
}
export interface UserResponse {
    user: User;
}
export interface UpdateUserRequest {
    username: string;
    email?: string;
    password?: string;
}
