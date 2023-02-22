"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const user_controller_1 = require("./controllers/user.controller");
const pet_controller_1 = require("./controllers/pet.controller");
const create_user_1 = require("../../app/use-cases/user/create-user");
const login_user_1 = require("../../app/use-cases/user/login-user");
const update_user_1 = require("../../app/use-cases/user/update-user");
const create_pet_1 = require("../../app/use-cases/pet/create-pet");
const find_all_pets_1 = require("../../app/use-cases/pet/find-all-pets");
const update_pet_1 = require("../../app/use-cases/pet/update-pet");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [user_controller_1.UserController, pet_controller_1.PetController],
        providers: [
            create_user_1.default,
            login_user_1.default,
            update_user_1.default,
            create_pet_1.default,
            find_all_pets_1.default,
            update_pet_1.default,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map