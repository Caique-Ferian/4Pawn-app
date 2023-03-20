import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makePet from '@test/factories/make-pet';
import UpdatePet from '@app/use-cases/pet/update-pet';
describe('Testing Route Update Pet Image (e2e)', () => {
  let app: INestApplication;
  const pet = makePet({ image: 'fake-image-2' });
  const mockedPet = {
    id: pet.id,
    image: 'fake-image-2',
  };
  const updatePet = {
    execute: () => ({
      pet,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(UpdatePet)
      .useValue(updatePet)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to update a pet image', async () => {
    const login = await request(app.getHttpServer())
      .post('/users/auth/login/')
      .send({ username: 'john123', password: '1234567s' });
    return request(app.getHttpServer())
      .patch('/pets/patch/image/')
      .set('authorization', login.body.token)
      .send(mockedPet)
      .expect(200)
      .expect((response: request.Response) => {
        const updatedPet = response.body;
        expect(updatedPet.pet.image).toEqual(pet.image);
      });
  });
  afterAll(async () => await app.close());
});
