"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserViewModule {
    static toHTTP(user) {
        return {
            id: user.id,
            fullName: user.fullName,
            email: user.email.value,
            role: user.role,
        };
    }
}
exports.default = UserViewModule;
//# sourceMappingURL=user-view-module.js.map