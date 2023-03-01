import { IsNumber, IsUUID, ValidationArguments } from 'class-validator';

export default class PatchPetWeightBody {
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
        if (!args.value) return 'weightInKg field must be filled.';
        return `${args.value} is not a valid number of weight.`;
      },
    },
  )
  weightInKg: number;
}
