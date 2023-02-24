import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class CustomPasswordValidation implements ValidatorConstraintInterface {
    validate(password: string): boolean;
    defaultMessage(validationArguments: ValidationArguments): string;
}
