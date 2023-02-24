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
const user_repository_1 = require("../../repositories/user-repository");
const userNotFound_1 = require("./error/userNotFound");
const email_1 = require("../../entities/user/email");
const password_1 = require("../../entities/user/password");
const user_1 = require("../../entities/user/user");
const common_1 = require("@nestjs/common");
let UpdateUser = class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { username, password, email } = request;
        const hasUser = await this.userRepository.hasUser(username);
        if (!hasUser)
            throw new userNotFound_1.default();
        let updatedUser;
        if (email) {
            updatedUser = new user_1.default({
                fullName: hasUser.fullName,
                username: hasUser.username,
                password: hasUser.password,
                email: new email_1.default(email),
            }, hasUser.id);
        }
        if (password) {
            updatedUser = new user_1.default({
                fullName: hasUser.fullName,
                username: hasUser.username,
                password: new password_1.default(password),
                email: hasUser.email,
            }, hasUser.id);
        }
        await this.userRepository.save(updatedUser);
        return { user: updatedUser };
    }
};
UpdateUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.default])
], UpdateUser);
exports.default = UpdateUser;
//# sourceMappingURL=update-user.js.map