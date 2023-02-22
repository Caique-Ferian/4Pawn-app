import { Model } from 'sequelize-typescript';
export declare class Pets extends Model<Pets> {
    id: string;
    name: string;
    age: number;
    image: string;
    weight: number;
    color: string;
    adopted: boolean;
}
