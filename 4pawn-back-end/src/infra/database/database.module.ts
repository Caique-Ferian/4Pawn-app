import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { UsersModule } from './entities/users/users.module';
import { PetsModule } from './entities/pets/pets.module';

@Module({
  imports: [UsersModule, PetsModule],
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
