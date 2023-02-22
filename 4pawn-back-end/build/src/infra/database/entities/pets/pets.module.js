"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const pets_provider_1 = require("./pets.provider");
const pet_repository_1 = require("../../../../app/repositories/pet-repository");
const pets_service_1 = require("./pets.service");
let PetsModule = class PetsModule {
};
PetsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            ...pets_provider_1.petsProvider,
            {
                provide: pet_repository_1.default,
                useClass: pets_service_1.PetsService,
            },
        ],
        exports: [...pets_provider_1.petsProvider, pet_repository_1.default],
    })
], PetsModule);
exports.PetsModule = PetsModule;
//# sourceMappingURL=pets.module.js.map