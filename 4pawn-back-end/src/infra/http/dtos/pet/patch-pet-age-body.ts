import { IsNumber, IsUUID, ValidationArguments } from 'class-validator';

export default class PatchPetAgeBody {
  @IsUUID('all', {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Id field must be filled.';
      return `${args.value} is not a valid UUID.`;
    },
  })
  id: string;

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
}
