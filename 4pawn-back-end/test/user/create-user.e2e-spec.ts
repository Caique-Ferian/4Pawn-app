import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makeUser from '@test/factories/make-user';
import CreateUser from '@app/use-cases/user/create-user';
describe('Testing Route Create User (e2e)', () => {
  let app: INestApplication;
  const user = makeUser({
    username: 'john1234',
  });
  const mockedUser = {
    fullName: user.fullName,
    username: user.username,
    email: user.email.value,
    password: user.password.value,
  };
  const createUser = {
    execute: () => ({
      user,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(CreateUser)
      .useValue(createUser)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to create a user', async () => {
    return request(app.getHttpServer())
      .post('/users')
      .send(mockedUser)
      .expect(201)
      .expect((response: request.Response) => {
        const newUser = response.body;
        expect(newUser.user.email).toEqual(user.email.value);
      });
  });
  afterAll(async () => await app.close());
});
