import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makePet from '@test/factories/make-pet';
import CreatePet from '@app/use-cases/pet/create-pet';
describe('Testing Route Create Pet (e2e)', () => {
  let app: INestApplication;
  const pet = makePet();
  const mockedPet = {
    name: pet.name,
    ageInYears: pet.ageInYears,
    image: pet.image,
    weightInKg: pet.weightInKg,
    color: pet.color,
  };
  const createPet = {
    execute: () => ({
      pet,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(CreatePet)
      .useValue(createPet)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to create a pet', async () => {
    const login = await request(app.getHttpServer())
      .post('/users/auth/login/')
      .send({ username: 'john123', password: '1234567s' });
    return request(app.getHttpServer())
      .post('/pets/')
      .set('authorization', login.body.token)
      .send(mockedPet)
      .expect(201);
  });
  afterAll(async () => await app.close());
});
