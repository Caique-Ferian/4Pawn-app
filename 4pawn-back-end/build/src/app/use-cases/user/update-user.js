"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userNotFound_1 = require("./error/userNotFound");
const email_1 = require("../../entities/user/email");
const password_1 = require("../../entities/user/password");
const user_1 = require("../../entities/user/user");
class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { username, password, email } = request;
        const hasUser = await this.userRepository.hasUser(username);
        let updatedUser;
        if (!hasUser)
            throw new userNotFound_1.default();
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
}
exports.default = UpdateUser;
//# sourceMappingURL=update-user.js.map