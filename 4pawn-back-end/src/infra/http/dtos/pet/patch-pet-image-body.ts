import { IsNotEmpty, IsUUID, ValidationArguments } from 'class-validator';

export default class PatchPetImageBody {
  @IsUUID('all', {
    message: (args: ValidationArguments) => {
      if (!args.value) return 'Id field must be filled.';
      return `${args.value} is not a valid UUID.`;
    },
  })
  id: string;

  @IsNotEmpty({
    message: 'Image field must be filled.',
  })
  image: string;
}
