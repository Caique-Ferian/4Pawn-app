import User from '@app/entities/user/user';
import UserRepository from '@app/repositories/user-repository';

export default class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  public async create(user: User): Promise<void> {
    this.users.push(user);
  }

  public async hasUser(username: string): Promise<User | null> {
    return this.users.find((e) => e.username === username);
  }

  public async login(username: string): Promise<User | null> {
    return this.users.find((e) => e.username === username);
  }

  public async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex((e) => e.username === user.username);
    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }
  }
}
