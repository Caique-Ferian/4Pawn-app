"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const petNotFound_1 = require("./error/petNotFound");
const pet_1 = require("../../entities/pet/pet");
class UpdatePet {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute(request) {
        const { id, age, image, weight, adopted } = request;
        const hasPet = await this.petRepository.findPet(id);
        let updatedPet;
        if (!hasPet)
            throw new petNotFound_1.default();
        if (age) {
            updatedPet = new pet_1.default({
                name: hasPet.name,
                age,
                image: hasPet.image,
                weight: hasPet.weight,
                color: hasPet.color,
            }, hasPet.id);
        }
        if (image) {
            updatedPet = new pet_1.default({
                name: hasPet.name,
                age: hasPet.age,
                image,
                weight: hasPet.weight,
                color: hasPet.color,
            }, hasPet.id);
        }
        if (weight) {
            updatedPet = new pet_1.default({
                name: hasPet.name,
                age: hasPet.age,
                image: hasPet.image,
                weight,
                color: hasPet.color,
            }, hasPet.id);
        }
        if (adopted) {
            updatedPet = new pet_1.default({
                name: hasPet.name,
                age: hasPet.age,
                image: hasPet.image,
                weight: hasPet.weight,
                color: hasPet.color,
            }, hasPet.id, adopted);
        }
        await this.petRepository.save(updatedPet);
        return { pet: updatedPet };
    }
}
exports.default = UpdatePet;
//# sourceMappingURL=update-pet.js.map