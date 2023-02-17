import LoginUser from './login-user';
import InMemoryUserRepository from '@test/repositories/in-memory-user-repository';
import makeUser from '@test/factories/make-user';
import LoginUnsuccessful from './error/loginUnsuccessful';

describe('Testing use-case Login User', () => {
  it('should be able to login with an existent user', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    inMemoryUserRepository.create(makeUser());
    const loginUser = new LoginUser(inMemoryUserRepository);
    const { user } = await loginUser.execute({
      username: 'john123',
      password: '1234567s',
    });
    expect(inMemoryUserRepository.users[0]).toEqual(user);
  });
  it('should not be able to login with an inexistent user', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const loginUser = new LoginUser(inMemoryUserRepository);
    expect(() =>
      loginUser.execute({
        username: 'john123',
        password: '1234567s',
      }),
    ).rejects.toThrow(LoginUnsuccessful);
  });
});
