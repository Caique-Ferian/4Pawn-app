import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makePet from '@test/factories/make-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
describe('Testing Route Get Pet(e2e)', () => {
  let app: INestApplication;
  const pets = [makePet(), makePet()];
  const findAllPets = {
    execute: () => ({
      pets,
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })

      .overrideProvider(FindAllPets)
      .useValue(findAllPets)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to update a pet adopted', async () => {
    return request(app.getHttpServer())
      .get('/pets/')
      .expect(200)
      .expect((response: request.Response) => {
        const allPets = response.body;
        expect(allPets.pets).toHaveLength(2);
      });
  });
  afterAll(async () => await app.close());
});
