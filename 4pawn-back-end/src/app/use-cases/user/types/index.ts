import User from '@entities/user/user';

export interface CreateUserRequest {
  fullName: string;
  username: string;
  password: string;
  email: string;
}

export interface CreateUserResponse {
  user: User;
}

export interface LoginUserRequest {
  username: string;
  password: string;
}

export interface LoginUserResponse {
  user: User;
}
