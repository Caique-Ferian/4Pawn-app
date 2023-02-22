"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllPets {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute() {
        const pets = await this.petRepository.findAllPets();
        return { pets: pets };
    }
}
exports.default = FindAllPets;
//# sourceMappingURL=find-all-pets.js.map