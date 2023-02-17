import Email from './email';
import Password from './password';
import User from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      fullName: 'John',
      username: 'john123',
      role: 'admin',
      email: new Email('john123@gmail.com'),
      password: new Password('1234567s'),
    });

    expect(user).toBeInstanceOf(User);
  });
});
