import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { UserController } from './controllers/user.controller';
import { PetController } from './controllers/pet.controller';
import CreateUser from '@app/use-cases/user/create-user';
import LoginUser from '@app/use-cases/user/login-user';
import UpdateUser from '@app/use-cases/user/update-user';
import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController, PetController],
  providers: [
    CreateUser,
    LoginUser,
    UpdateUser,
    CreatePet,
    FindAllPets,
    UpdatePet,
  ],
})
export class HttpModule {}
