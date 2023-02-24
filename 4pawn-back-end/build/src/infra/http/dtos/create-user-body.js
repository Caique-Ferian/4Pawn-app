"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const customRoleValidation_1 = require("./validations/customRoleValidation");
const customPasswordValidation_1 = require("./validations/customPasswordValidation");
const class_validator_1 = require("class-validator");
class CreateUserBody {
}
__decorate([
    (0, class_validator_1.Length)(9, 50, {
        message: (args) => {
            if (!args.value) {
                return 'FullName field must be filled';
            }
            return (`FullName must be between ${args.constraints[0]}` +
                ` and ${args.constraints[1]} characters, but actual is ${args.value}`);
        },
    }),
    __metadata("design:type", String)
], CreateUserBody.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.Length)(3, 20, {
        message: (args) => {
            if (!args.value) {
                return 'Username field must be filled';
            }
            return (`Username must be between ${args.constraints[0]}` +
                ` and ${args.constraints[1]} characters, but actual is ${args.value}`);
        },
    }),
    __metadata("design:type", String)
], CreateUserBody.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, {
        message: (args) => {
            if (!args.value) {
                return 'Email field must be filled';
            }
            return 'Email is not a valid email';
        },
    }),
    __metadata("design:type", String)
], CreateUserBody.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Validate)(customPasswordValidation_1.CustomPasswordValidation),
    __metadata("design:type", String)
], CreateUserBody.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Validate)(customRoleValidation_1.CustomRoleValidation),
    __metadata("design:type", String)
], CreateUserBody.prototype, "role", void 0);
exports.default = CreateUserBody;
//# sourceMappingURL=create-user-body.js.map