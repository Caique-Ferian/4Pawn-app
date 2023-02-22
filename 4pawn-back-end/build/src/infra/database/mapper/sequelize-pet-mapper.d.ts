import Pet from '@app/entities/pet/pet';
import { Pets as PetSequelize } from '../entities/pets/pets.entity';
export default class SequelizePetMapper {
    static toSequelize(pet: Pet): {
        id: string;
        name: string;
        age: number;
        image: string;
        weight: number;
        color: string;
        adopted: boolean;
    };
    static toDomain(pet: PetSequelize): Pet;
}
