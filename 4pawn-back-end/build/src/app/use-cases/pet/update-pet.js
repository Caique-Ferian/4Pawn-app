"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const pet_repository_1 = require("../../repositories/pet-repository");
const petNotFound_1 = require("./error/petNotFound");
const pet_1 = require("../../entities/pet/pet");
const common_1 = require("@nestjs/common");
let UpdatePet = class UpdatePet {
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
};
UpdatePet = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pet_repository_1.default])
], UpdatePet);
exports.default = UpdatePet;
//# sourceMappingURL=update-pet.js.map