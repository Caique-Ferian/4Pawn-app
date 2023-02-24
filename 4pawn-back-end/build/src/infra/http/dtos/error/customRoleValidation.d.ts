import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class CustomRoleValidation implements ValidatorConstraintInterface {
    validate(role: string, validationArguments: ValidationArguments): boolean;
    defaultMessage(validationArguments: ValidationArguments): string;
}
