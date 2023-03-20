import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import makePet from '@test/factories/make-pet';
import UpdatePet from '@app/use-cases/pet/update-pet';
describe('Testing Route Update Pet Adopted (e2e)', () => {
  let app: INestApplication;
  const pet = makePet({ adopted: true });
  const mockedPet = {
    id: pet.id,
    adopted: true,
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

  it('should be able to update a pet adopted', async () => {
    return request(app.getHttpServer())
      .patch('/pets/patch/adopted/')
      .send(mockedPet)
      .expect(200)
      .expect((response: request.Response) => {
        const updatedPet = response.body;
        expect(updatedPet.pet.adopted).toEqual(pet.adopted);
      });
  });
  afterAll(async () => await app.close());
});
