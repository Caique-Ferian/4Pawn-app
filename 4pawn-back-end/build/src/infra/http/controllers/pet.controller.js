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
exports.PetController = void 0;
const common_1 = require("@nestjs/common");
const create_pet_1 = require("../../../app/use-cases/pet/create-pet");
const find_all_pets_1 = require("../../../app/use-cases/pet/find-all-pets");
const update_pet_1 = require("../../../app/use-cases/pet/update-pet");
let PetController = class PetController {
    constructor(createPet, findAllPets, updatePet) {
        this.createPet = createPet;
        this.findAllPets = findAllPets;
        this.updatePet = updatePet;
    }
    async hello() {
        return 'NEW CONTROLLER';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetController.prototype, "hello", null);
PetController = __decorate([
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [create_pet_1.default,
        find_all_pets_1.default,
        update_pet_1.default])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map