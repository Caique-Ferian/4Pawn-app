"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../../../app/entities/user/email");
const user_1 = require("../../../app/entities/user/user");
const password_1 = require("../../../app/entities/user/password");
class SequelizeUserMapper {
    static toSequelize(user) {
        return {
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            email: user.email.value,
            password: user.password.value,
            role: user.role,
        };
    }
    static toDomain(user) {
        return new user_1.default({
            fullName: user.fullName,
            username: user.username,
            email: new email_1.default(user.email),
            password: new password_1.default(user.password),
            role: user.role,
        }, user.id);
    }
}
exports.default = SequelizeUserMapper;
//# sourceMappingURL=sequelize-user-mapper.js.map