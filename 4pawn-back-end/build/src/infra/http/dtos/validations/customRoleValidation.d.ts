import { ValidatorConstraintInterface } from 'class-validator';
export declare class CustomRoleValidation implements ValidatorConstraintInterface {
    validate(role: string): boolean;
    defaultMessage(): string;
}
