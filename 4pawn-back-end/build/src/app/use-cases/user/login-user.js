"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginUnsuccessful_1 = require("./error/loginUnsuccessful");
class LoginUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const { username, password } = request;
        const login = await this.userRepository.login(username, password);
        if (!login)
            throw new loginUnsuccessful_1.default();
        return { user: login };
    }
}
exports.default = LoginUser;
//# sourceMappingURL=login-user.js.map