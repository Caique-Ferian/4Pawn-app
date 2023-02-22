"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class User {
    constructor(props, id, role) {
        this.props = Object.assign(Object.assign({}, props), { role: role !== null && role !== void 0 ? role : 'user' });
        this._id = id !== null && id !== void 0 ? id : (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get fullName() {
        return this.props.fullName;
    }
    set fullName(fullName) {
        this.props.fullName = fullName;
    }
    get username() {
        return this.props.username;
    }
    set username(username) {
        this.props.username = username;
    }
    get email() {
        return this.props.email;
    }
    set email(email) {
        this.props.email = email;
    }
    get password() {
        return this.props.password;
    }
    set password(password) {
        this.props.password = password;
    }
    get role() {
        return this.props.role;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map