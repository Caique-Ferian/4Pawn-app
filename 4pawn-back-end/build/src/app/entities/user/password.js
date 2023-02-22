"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Password {
    constructor(password) {
        this.regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
        if (!this.regex.test(password)) {
            throw new Error('Invalid password');
        }
        this.password = password;
    }
    get value() {
        return this.password;
    }
}
exports.default = Password;
//# sourceMappingURL=password.js.map