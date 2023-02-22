import { Model } from 'sequelize-typescript';
export declare class Users extends Model<Users> {
    id: string;
    fullName: string;
    username: string;
    email: string;
    password: string;
    role: string;
}
