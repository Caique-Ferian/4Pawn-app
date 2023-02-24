import { Length, ValidationArguments, Validate } from 'class-validator';
import { CustomPasswordValidation } from './validations/customPasswordValidation';

export default class PatchPasswordBody {
  @Length(3, 20, {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Username field must be filled';
      return (
        `Username must be between ${args.constraints[0]}` +
        ` and ${args.constraints[1]} characters, but actual is ${args.value}`
      );
    },
  })
  username: string;

  @Validate(CustomPasswordValidation)
  password: string;
}
