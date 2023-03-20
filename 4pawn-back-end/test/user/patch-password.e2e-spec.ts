import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makeUser from '@test/factories/make-user';
import UpdateUser from '@app/use-cases/user/update-user';
import Password from '@app/entities/user/password';
describe('Testing Route Patch User Password (e2e)', () => {
  let app: INestApplication;
  const user = makeUser({
    username: 'john1234',
    password: new Password('1234567ss'),
  });
  const mockedUser = {
    username: user.username,
    password: '1234567ss',
  };
  const updateUser = {
    execute: () => ({
      user,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(UpdateUser)
      .useValue(updateUser)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to patch a existent user password', () => {
    return request(app.getHttpServer())
      .patch('/users/patch/password/')
      .send(mockedUser)
      .expect(200);
  });
  afterAll(async () => await app.close());
});
