import Pet from '@app/entities/pet/pet';
import { PetHTTP } from './types';
export default class PetViewModule {
    static toHTTP(pet: Pet): PetHTTP;
}
