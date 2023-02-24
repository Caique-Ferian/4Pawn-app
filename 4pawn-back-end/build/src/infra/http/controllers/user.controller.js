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
exports.UserController = void 0;
const create_user_1 = require("../../../app/use-cases/user/create-user");
const login_user_1 = require("../../../app/use-cases/user/login-user");
const update_user_1 = require("../../../app/use-cases/user/update-user");
const common_1 = require("@nestjs/common");
const create_user_body_1 = require("../dtos/user/create-user-body");
const user_view_module_1 = require("../view-module/user-view-module");
const login_user_body_1 = require("../dtos/user/login-user-body");
const patch_email_body_1 = require("../dtos/user/patch-email-body");
const patch_password_body_1 = require("../dtos/user/patch-password-body");
let UserController = class UserController {
    constructor(createUser, loginUser, updateUser) {
        this.createUser = createUser;
        this.loginUser = loginUser;
        this.updateUser = updateUser;
    }
    async create(body) {
        try {
            const { fullName, username, email, password, role } = body;
            const { user } = await this.createUser.execute({
                fullName,
                username,
                email,
                password,
                role,
            });
            return { user: user_view_module_1.default.toHTTP(user) };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.CONFLICT,
                error: 'User already exists in DB',
            }, common_1.HttpStatus.CONFLICT);
        }
    }
    async login(body) {
        try {
            const { username, password } = body;
            const { user } = await this.loginUser.execute({ username, password });
            return { user: user_view_module_1.default.toHTTP(user) };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Username or password incorrect',
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async patchEmail(body) {
        try {
            const { username, email } = body;
            const { user } = await this.updateUser.execute({ username, email });
            return { user: user_view_module_1.default.toHTTP(user) };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Username Not Found in DB',
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async patchPassword(body) {
        try {
            const { username, password } = body;
            const { user } = await this.updateUser.execute({ username, password });
            return { user: user_view_module_1.default.toHTTP(user) };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Username Not Found in DB',
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_body_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_body_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Patch)('patch/email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_email_body_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "patchEmail", null);
__decorate([
    (0, common_1.Patch)('patch/password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_password_body_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "patchPassword", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [create_user_1.default,
        login_user_1.default,
        update_user_1.default])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map