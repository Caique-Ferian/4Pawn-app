import {
  Length,
  ValidationArguments,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export default class CreatePetBody {
  @Length(2, 20, {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Name field must be filled.';
      return (
        `Name must be between ${args.constraints[0]}` +
        ` and ${args.constraints[1]} characters, but actual is ${args.value}.`
      );
    },
  })
  name: string;

  @IsNumber(
    {},
    {
      message: (args: ValidationArguments) => {
        if (!args.value) return 'AgeInYears field must be filled.';
        return `${args.value} is not a valid number of age.`;
      },
    },
  )
  ageInYears: number;

  @IsNotEmpty({
    message: 'Image field must be filled.',
  })
  image: string;

  @IsNumber(
    {},
    {
      message: (args: ValidationArguments) => {
        if (!args.value) return 'weightInKg field must be filled.';
        return `${args.value} is not a valid number of weight.`;
      },
    },
  )
  weightInKg: number;

  @Length(4, 20, {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Color field must be filled.';
      return (
        `Color must be between ${args.constraints[0]}` +
        ` and ${args.constraints[1]} characters, but actual is ${args.value}.`
      );
    },
  })
  color: string;
}
