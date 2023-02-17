import Password from './password';

describe('User password', () => {
  it('should be able to create a user password', () => {
    const password = new Password('1234567s');

    expect(password).toBeInstanceOf(Password);
  });

  it('should not be able to create a user password with less than 8 characters', () => {
    expect(() => new Password('123')).toThrow();
  });

  it('should not be able to create a user password with 8 or more characters if not including at least one letter', () => {
    expect(() => new Password('1235677889')).toThrow();
  });
});
