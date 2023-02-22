"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petsProvider = void 0;
const constants_1 = require("../../constants");
const pets_entity_1 = require("./pets.entity");
exports.petsProvider = [
    {
        provide: constants_1.PETS_REPOSITORY,
        useValue: pets_entity_1.Pets,
    },
];
//# sourceMappingURL=pets.provider.js.map