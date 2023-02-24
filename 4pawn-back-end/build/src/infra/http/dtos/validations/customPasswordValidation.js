"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPasswordValidation = void 0;
const class_validator_1 = require("class-validator");
let CustomPasswordValidation = class CustomPasswordValidation {
    validate(password) {
        const regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
        return regex.test(password);
    }
    defaultMessage(validationArguments) {
        const { value } = validationArguments;
        if (!value)
            return 'Password field must be filled';
        return ('Invalid password. Expected minimal 8 characters,' +
            'contains letters and numbers');
    }
};
CustomPasswordValidation = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], CustomPasswordValidation);
exports.CustomPasswordValidation = CustomPasswordValidation;
//# sourceMappingURL=customPasswordValidation.js.map