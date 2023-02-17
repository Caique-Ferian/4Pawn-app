import User from '@app/entities/user/user';

export default abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract save(user: User): Promise<void>;
  abstract hasUser(username: string): Promise<User>;
  abstract login(username: string, password: string): Promise<User>;
}
