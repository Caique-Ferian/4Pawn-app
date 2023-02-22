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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../constants");
const sequelize_user_mapper_1 = require("../../mapper/sequelize-user-mapper");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(user) {
        const { id, fullName, username, email, password, role } = sequelize_user_mapper_1.default.toSequelize(user);
        await this.usersRepository.create({
            id,
            fullName,
            username,
            email,
            password,
            role,
        });
    }
    async hasUser(username) {
        const user = await this.usersRepository.findOne({
            where: { username },
        });
        if (!user)
            return null;
        return sequelize_user_mapper_1.default.toDomain(user);
    }
    async login(username, password) {
        const user = await this.usersRepository.findOne({
            where: { username, password },
        });
        return sequelize_user_mapper_1.default.toDomain(user);
    }
    async save(user) {
        const userToUpdate = sequelize_user_mapper_1.default.toSequelize(user);
        await this.usersRepository.update(Object.assign({}, userToUpdate), {
            where: { id: userToUpdate.id },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USERS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map