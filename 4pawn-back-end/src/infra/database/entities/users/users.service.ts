import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from '@infra/database/constants';
import { Users as UsersSequelize } from './users.entity';
import User from '@app/entities/user/user';
import UserRepository from '@app/repositories/user-repository';
import SequelizeUserMapper from '@infra/database/mapper/sequelize-user-mapper';

@Injectable()
export class UsersService implements UserRepository {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRepository: typeof UsersSequelize,
  ) {}

  async create(user: User): Promise<void> {
    const { id, fullName, username, email, password, role } =
      SequelizeUserMapper.toSequelize(user);
    await this.usersRepository.create<UsersSequelize>({
      id,
      fullName,
      username,
      email,
      password,
      role,
    });
  }
  async hasUser(username: string): Promise<User | null> {
    const user = await this.usersRepository.findOne<UsersSequelize>({
      where: { username },
    });
    if (!user) return null;
    return SequelizeUserMapper.toDomain(user);
  }

  async login(username: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne<UsersSequelize>({
      where: { username, password },
    });
    return SequelizeUserMapper.toDomain(user);
  }
  async save(user: User): Promise<void> {
    const userToUpdate = SequelizeUserMapper.toSequelize(user);
    await this.usersRepository.update<UsersSequelize>(
      { ...userToUpdate },
      {
        where: { id: userToUpdate.id },
      },
    );
  }
}
