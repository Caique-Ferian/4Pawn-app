import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class CustomRoleValidation implements ValidatorConstraintInterface {
  validate(role: string): boolean {
    return role === 'admin';
  }
  defaultMessage(): string {
    return 'Role must be admin, but received $value';
  }
}
