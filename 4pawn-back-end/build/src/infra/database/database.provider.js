"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_config_1 = require("./database.config");
const constants_1 = require("./constants");
const users_entity_1 = require("./entities/users/users.entity");
const pets_entity_1 = require("./entities/pets/pets.entity");
exports.databaseProvider = [
    {
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize(database_config_1.databaseConfig);
            sequelize.addModels([users_entity_1.Users, pets_entity_1.Pets]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map