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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const common_1 = require("@nestjs/common");
const create_pet_1 = require("../../../app/use-cases/pet/create-pet");
const find_all_pets_1 = require("../../../app/use-cases/pet/find-all-pets");
const update_pet_1 = require("../../../app/use-cases/pet/update-pet");
const pets_view_module_1 = require("../view-module/pets-view-module");
const create_pet_body_1 = require("../dtos/pet/create-pet-body");
const patch_pet_age_body_1 = require("../dtos/pet/patch-pet-age-body");
const patch_pet_image_body_1 = require("../dtos/pet/patch-pet-image-body");
const patch_pet_weight_body_1 = require("../dtos/pet/patch-pet-weight-body");
const patch_pet_adopted_body_1 = require("../dtos/pet/patch-pet-adopted-body");
let PetController = class PetController {
    constructor(createPet, findAllPets, updatePet) {
        this.createPet = createPet;
        this.findAllPets = findAllPets;
        this.updatePet = updatePet;
    }
    async create(body) {
        const { name, ageInYears, image, weightInKg, color } = body;
        const { pet } = await this.createPet.execute({
            name,
            ageInYears,
            image,
            weightInKg,
            color,
        });
        return { pet: pets_view_module_1.default.toHTTP(pet) };
    }
    async findAll() {
        const { pets } = await this.findAllPets.execute();
        return { pets: pets.map(pets_view_module_1.default.toHTTP) };
    }
    async patchAge(body) {
        const { id, ageInYears } = body;
        const { pet } = await this.updatePet.execute({ id, ageInYears });
        return { pet: pets_view_module_1.default.toHTTP(pet) };
    }
    async patchImage(body) {
        const { id, image } = body;
        const { pet } = await this.updatePet.execute({ id, image });
        return { pet: pets_view_module_1.default.toHTTP(pet) };
    }
    async patchWeight(body) {
        const { id, weightInKg } = body;
        const { pet } = await this.updatePet.execute({ id, weightInKg });
        return { pet: pets_view_module_1.default.toHTTP(pet) };
    }
    async patchAdopted(body) {
        const { id, adopted } = body;
        const { pet } = await this.updatePet.execute({ id, adopted });
        return { pet: pets_view_module_1.default.toHTTP(pet) };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_body_1.default]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('patch/age'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_pet_age_body_1.default]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "patchAge", null);
__decorate([
    (0, common_1.Patch)('patch/image'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_pet_image_body_1.default]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "patchImage", null);
__decorate([
    (0, common_1.Patch)('patch/weight'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_pet_weight_body_1.default]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "patchWeight", null);
__decorate([
    (0, common_1.Patch)('patch/adopted'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_pet_adopted_body_1.default]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "patchAdopted", null);
PetController = __decorate([
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [create_pet_1.default,
        find_all_pets_1.default,
        update_pet_1.default])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map