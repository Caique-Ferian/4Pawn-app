import { CustomRoleValidation } from './validations/customRoleValidation';
import { CustomPasswordValidation } from './validations/customPasswordValidation';
import {
  Length,
  IsEmail,
  Validate,
  IsOptional,
  ValidationArguments,
} from 'class-validator';

export default class CreateUserBody {
  @Length(9, 50, {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'FullName field must be filled.';
      return (
        `FullName must be between ${args.constraints[0]}` +
        ` and ${args.constraints[1]} characters, but actual is ${args.value}.`
      );
    },
  })
  fullName: string;

  @Length(3, 20, {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Username field must be filled.';
      return (
        `Username must be between ${args.constraints[0]}` +
        ` and ${args.constraints[1]} characters, but actual is ${args.value}.`
      );
    },
  })
  username: string;

  @IsEmail(
    {},
    {
      message: (args: ValidationArguments) => {
        if (!args.value) return 'Email field must be filled.';
        return `${args.value} is not a valid email.`;
      },
    },
  )
  email: string;

  @Validate(CustomPasswordValidation)
  password: string;

  @IsOptional()
  @Validate(CustomRoleValidation)
  role?: string;
}
