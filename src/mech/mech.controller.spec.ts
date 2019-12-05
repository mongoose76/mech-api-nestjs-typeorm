import { Test, TestingModule } from '@nestjs/testing';
import { MechController } from './mech.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Mech } from './mech.entity';
import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
  }),
);

describe('MechController', () => {
  let mechController: MechController;
  let repositoryMock: MockType<Repository<Mech>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechController],
      providers: [
        // Provide the mock instead of the actual repository
        {
          provide: getRepositoryToken(Mech),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    repositoryMock = module.get(getRepositoryToken(Mech));
    mechController = module.get<MechController>(MechController);
  });

  describe('/mech', () => {
    const mechs = [{ name: 'Alni', id: '123' }];

    it('should return a list of mechs', () => {
      repositoryMock.find.mockReturnValue(mechs);
      expect(mechController.findAll()).toBe(mechs);
    });
  });

  describe('/mech/:id', () => {
    const mech = { name: 'Alni', id: '123' };

    it('should return one mech', () => {
      repositoryMock.findOne.mockReturnValue(mech);
      expect(mechController.findOne(1)).toBe(mech);
    });
  });
});
