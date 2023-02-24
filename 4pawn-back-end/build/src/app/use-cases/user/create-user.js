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
const user_1 = require("../../entities/user/user");
const password_1 = require("../../entities/user/password");
const email_1 = require("../../entities/user/email");
const userAlreadyExists_1 = require("./error/userAlreadyExists");
const common_1 = require("@nestjs/common");
let CreateUser = class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { fullName, username, password, email, role } = request;
        const hasUser = await this.userRepository.hasUser(username);
        if (hasUser)
            throw new userAlreadyExists_1.default();
        const user = new user_1.default({
            fullName,
            username,
            password: new password_1.default(password),
            email: new email_1.default(email),
            role,
        });
        await this.userRepository.create(user);
        return { user };
    }
};
CreateUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.default])
], CreateUser);
exports.default = CreateUser;
//# sourceMappingURL=create-user.js.map