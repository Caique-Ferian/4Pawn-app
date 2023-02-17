import User from '@app/entities/user/user';
import IPropsUser from '@app/entities/user/types/index';
import Email from '@app/entities/user/email';
import Password from '@app/entities/user/password';

type Override = Partial<IPropsUser>;

export default function makeUser(override: Override = {}) {
  return new User({
    fullName: 'John Lenon',
    username: 'john123',
    email: new Email('john_beatles@test.com'),
    password: new Password('1234567s'),
    ...override,
  });
}
