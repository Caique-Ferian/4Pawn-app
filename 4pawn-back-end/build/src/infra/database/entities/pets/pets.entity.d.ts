import { Model } from 'sequelize-typescript';
export declare class Pets extends Model<Pets> {
    id: string;
    name: string;
    ageInYears: number;
    image: string;
    weightInKg: number;
    color: string;
    adopted: boolean;
}
