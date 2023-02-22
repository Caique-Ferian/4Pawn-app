"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email) {
        this.regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.regex.test(email)) {
            throw new Error('Invalid email');
        }
        this.email = email;
    }
    get value() {
        return this.email;
    }
}
exports.default = Email;
//# sourceMappingURL=email.js.map