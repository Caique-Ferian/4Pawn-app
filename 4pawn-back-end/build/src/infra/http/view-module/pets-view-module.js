"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PetViewModule {
    static toHTTP(pet) {
        return {
            id: pet.id,
            name: pet.name,
            ageInYears: pet.ageInYears,
            image: pet.image,
            weightInKg: pet.weightInKg,
            color: pet.color,
            adopted: pet.adopted,
        };
    }
}
exports.default = PetViewModule;
//# sourceMappingURL=pets-view-module.js.map