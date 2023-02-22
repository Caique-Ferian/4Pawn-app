"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../entities/user/user");
const password_1 = require("../../entities/user/password");
const email_1 = require("../../entities/user/email");
const userAlreadyExists_1 = require("./error/userAlreadyExists");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { fullName, username, password, email } = request;
        const hasUser = await this.userRepository.hasUser(username);
        if (hasUser)
            throw new userAlreadyExists_1.default();
        const user = new user_1.default({
            fullName,
            username,
            password: new password_1.default(password),
            email: new email_1.default(email),
        });
        await this.userRepository.create(user);
        return { user };
    }
}
exports.default = CreateUser;
//# sourceMappingURL=create-user.js.map