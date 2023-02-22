"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProvider = void 0;
const constants_1 = require("../../constants");
const users_entity_1 = require("./users.entity");
exports.usersProvider = [
    {
        provide: constants_1.USERS_REPOSITORY,
        useValue: users_entity_1.Users,
    },
];
//# sourceMappingURL=users.provider.js.map