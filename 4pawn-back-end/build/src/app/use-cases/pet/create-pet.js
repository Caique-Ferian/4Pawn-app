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
const pet_1 = require("../../entities/pet/pet");
const common_1 = require("@nestjs/common");
let CreatePet = class CreatePet {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async execute(request) {
        const { name, age, image, weight, color } = request;
        const pet = new pet_1.default({ name, age, image, weight, color });
        await this.petRepository.create(pet);
        return { pet };
    }
};
CreatePet = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pet_repository_1.default])
], CreatePet);
exports.default = CreatePet;
//# sourceMappingURL=create-pet.js.map