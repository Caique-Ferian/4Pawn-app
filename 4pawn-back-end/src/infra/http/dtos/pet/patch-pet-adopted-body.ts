import { IsBoolean, IsUUID, ValidationArguments } from 'class-validator';

export default class PatchPetAgeBody {
  @IsUUID('all', {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Id field must be filled.';
      return `${args.value} is not a valid UUID.`;
    },
  })
  id: string;

  @IsBoolean({
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Adopted field must be filled.';
      return 'Adopted must be TRUE or FALSE.';
    },
  })
  adopted: boolean;
}
