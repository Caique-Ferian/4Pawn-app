"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pet_1 = require("../../entities/pet/pet");
class CreatePet {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute(request) {
        const { name, age, image, weight, color } = request;
        const pet = new pet_1.default({ name, age, image, weight, color });
        await this.petRepository.create(pet);
        return { pet };
    }
}
exports.default = CreatePet;
//# sourceMappingURL=create-pet.js.map