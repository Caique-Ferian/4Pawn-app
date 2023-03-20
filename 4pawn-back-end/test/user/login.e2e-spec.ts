import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makeUser from '@test/factories/make-user';
import LoginUser from '@app/use-cases/user/login-user';
import Email from '@app/entities/user/email';
describe('Testing Route Login (e2e)', () => {
  let app: INestApplication;
  const user = makeUser({
    email: new Email('john123@gmail.com'),
    role: 'admin',
  });
  const mockedUser = {
    username: user.username,
    password: user.password.value,
  };
  const loginUser = {
    execute: () => ({
      user,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(LoginUser)
      .useValue(loginUser)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to login with a existent user', async () => {
    return request(app.getHttpServer())
      .post('/users/auth/login')
      .send(mockedUser)
      .expect(201)
      .expect((response: request.Response) => {
        const login = response.body;
        expect(login.email).toEqual(user.email.value);
        expect(login.role).toEqual(user.role);
        expect(login.token).toBeDefined();
      });
  });
  it('should not be able to login with a non existent user', async () => {
    return request(app.getHttpServer())
      .post('/users/auth/login')
      .send({ username: 'test', password: '1234567s' })
      .expect(401);
  });
  afterAll(async () => await app.close());
});
