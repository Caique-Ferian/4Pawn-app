import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class CustomPasswordValidation implements ValidatorConstraintInterface {
  validate(password: string): boolean {
    const regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
    return regex.test(password);
  }
  defaultMessage(validationArguments: ValidationArguments): string {
    const { value } = validationArguments;
    if (!value) return 'Password field must be filled';
    return (
      'Invalid password. Expected minimal 8 characters,' +
      'contains letters and numbers'
    );
  }
}
