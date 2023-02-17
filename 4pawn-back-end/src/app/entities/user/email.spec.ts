import Email from './email';

describe('User email', () => {
  it('should be able to create a user email', () => {
    const email = new Email('test@gmail.com');

    expect(email).toBeInstanceOf(Email);
  });

  it('should not be able to create a user email with invalid type', () => {
    expect(() => new Email('test@test.com..')).toThrow();
  });
});
