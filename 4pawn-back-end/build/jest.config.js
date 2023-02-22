"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_paths_json_1 = require("./tsconfig.paths.json");
const config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_paths_json_1.compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map