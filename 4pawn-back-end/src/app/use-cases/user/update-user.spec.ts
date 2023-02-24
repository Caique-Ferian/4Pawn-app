import InMemoryUserRepository from '@test/repositories/in-memory-user-repository';
import makeUser from '@test/factories/make-user';
import UpdateUser from './update-user';
import UserNotFound from './error/userNotFound';

describe('Testing use-case Update User', () => {
  const inMemoryUserRepository = new InMemoryUserRepository();
  inMemoryUserRepository.create(makeUser());
  const updateUser = new UpdateUser(inMemoryUserRepository);
  it('should be able to update a user email with a existent user', async () => {
    const { user } = await updateUser.execute({
      username: 'john123',
      email: 'john_lenon_beatles@test.com',
    });
    expect(inMemoryUserRepository.users[0]).toEqual(user);
  });
  it('should be able to update a user password with a existent user', async () => {
    const { user } = await updateUser.execute({
      username: 'john123',
      password: '12345s6788',
    });
    expect(inMemoryUserRepository.users[0]).toEqual(user);
    inMemoryUserRepository.users = [];
  });
  it('should not be able to update a inexistent user', async () => {
    expect(() =>
      updateUser.execute({
        username: 'john123',
        password: '12345s6788',
      }),
    ).rejects.toThrow(UserNotFound);
  });
});
