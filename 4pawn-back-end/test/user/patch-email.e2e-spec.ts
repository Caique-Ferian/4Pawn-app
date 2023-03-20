import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makeUser from '@test/factories/make-user';
import UpdateUser from '@app/use-cases/user/update-user';
import Email from '@app/entities/user/email';
describe('Testing Route Patch User Email (e2e)', () => {
  let app: INestApplication;
  const user = makeUser({
    username: 'john1234',
    email: new Email('john_beatles@gmail.com'),
  });
  const mockedUser = {
    username: user.username,
    email: 'john_beatles@gmail.com',
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

  it('should be able to patch a existent user email', async () => {
    return request(app.getHttpServer())
      .patch('/users/patch/email/')
      .send(mockedUser)
      .expect(200)
      .expect((response: request.Response) => {
        const updatedUser = response.body;
        expect(updatedUser.user.email).toEqual(mockedUser.email);
      });
  });
  afterAll(async () => await app.close());
});
