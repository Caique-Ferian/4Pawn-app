import LoginUser from './login-user';
import InMemoryUserRepository from '@test/repositories/in-memory-user-repository';
import makeUser from '@test/factories/make-user';
import LoginUnsuccessful from './error/loginUnsuccessful';

describe('Testing use-case Login User', () => {
  const inMemoryUserRepository = new InMemoryUserRepository();
  inMemoryUserRepository.create(makeUser());
  const loginUser = new LoginUser(inMemoryUserRepository);
  it('should be able to login with an existent user', async () => {
    const { user } = await loginUser.execute({
      username: 'john123',
      password: '1234567s',
    });
    expect(inMemoryUserRepository.users[0]).toEqual(user);
    inMemoryUserRepository.users = [];
  });
  it('should not be able to login with a inexistent user', async () => {
    expect(() =>
      loginUser.execute({
        username: 'john123',
        password: '1234567s',
      }),
    ).rejects.toThrow(LoginUnsuccessful);
  });
});
