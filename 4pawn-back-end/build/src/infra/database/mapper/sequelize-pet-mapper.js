"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pet_1 = require("../../../app/entities/pet/pet");
class SequelizePetMapper {
    static toSequelize(pet) {
        return {
            id: pet.id,
            name: pet.name,
            age: pet.age,
            image: pet.image,
            weight: pet.weight,
            color: pet.color,
            adopted: pet.adopted,
        };
    }
    static toDomain(pet) {
        return new pet_1.default({
            name: pet.name,
            age: pet.age,
            image: pet.image,
            weight: pet.weight,
            color: pet.color,
        }, pet.id, pet.adopted);
    }
}
exports.default = SequelizePetMapper;
//# sourceMappingURL=sequelize-pet-mapper.js.map