import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makePet from '@test/factories/make-pet';
import UpdatePet from '@app/use-cases/pet/update-pet';
describe('Testing Route Update Pet Weight (e2e)', () => {
  let app: INestApplication;
  const pet = makePet({ weightInKg: 3 });
  const mockedPet = {
    id: pet.id,
    weightInKg: 3,
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

  it('should be able to update a pet weight', async () => {
    const login = await request(app.getHttpServer())
      .post('/users/auth/login/')
      .send({ username: 'john123', password: '1234567s' });
    return request(app.getHttpServer())
      .patch('/pets/patch/weight/')
      .set('authorization', login.body.token)
      .send(mockedPet)
      .expect(200)
      .expect((response: request.Response) => {
        const updatedPet = response.body;
        expect(updatedPet.pet.weightInKg).toEqual(pet.weightInKg);
      });
  });
  afterAll(async () => await app.close());
});
