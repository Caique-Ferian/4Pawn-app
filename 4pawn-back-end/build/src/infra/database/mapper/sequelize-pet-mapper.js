"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pet_1 = require("../../../app/entities/pet/pet");
class SequelizePetMapper {
    static toSequelize(pet) {
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
    static toDomain(pet) {
        return new pet_1.default({
            name: pet.name,
            ageInYears: pet.ageInYears,
            image: pet.image,
            weightInKg: pet.weightInKg,
            color: pet.color,
            adopted: pet.adopted,
        }, pet.id);
    }
}
exports.default = SequelizePetMapper;
//# sourceMappingURL=sequelize-pet-mapper.js.map