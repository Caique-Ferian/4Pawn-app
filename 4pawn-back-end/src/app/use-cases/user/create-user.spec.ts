import CreateUser from './create-user';
import InMemoryUserRepository from '@test/repositories/in-memory-user-repository';
import UserAlreadyExists from './error/userAlreadyExists';

describe('Testing use-case Create User', () => {
  it('should be able to create a user', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(inMemoryUserRepository);
    const { user } = await createUser.execute({
      fullName: 'John Lenon',
      username: 'john123',
      email: 'john_beatles@test.com',
      password: '1234567s',
    });
    expect(inMemoryUserRepository.users).toHaveLength(1);
    expect(inMemoryUserRepository.users[0]).toEqual(user);
  });
  it('should not be able to create a user if his already exists in DB', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(inMemoryUserRepository);
    await createUser.execute({
      fullName: 'John Lenon',
      username: 'john123',
      email: 'john_beatles@test.com',
      password: '1234567s',
    });
    expect(() =>
      createUser.execute({
        fullName: 'John Lemon',
        username: 'john123',
        email: 'john_lemon@test.com',
        password: '12345677s',
      }),
    ).rejects.toThrow(UserAlreadyExists);
  });
});
