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
exports.UserController = void 0;
const create_user_1 = require("../../../app/use-cases/user/create-user");
const login_user_1 = require("../../../app/use-cases/user/login-user");
const update_user_1 = require("../../../app/use-cases/user/update-user");
const common_1 = require("@nestjs/common");
let UserController = class UserController {
    constructor(createUser, loginUser, updateUser) {
        this.createUser = createUser;
    }
    getHello() {
        return 'NEW CONTROLLER';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "getHello", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [create_user_1.default,
        login_user_1.default,
        update_user_1.default])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map