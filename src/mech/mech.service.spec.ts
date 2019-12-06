import { Test, TestingModule } from '@nestjs/testing';
import { MechService } from './mech.service';

describe('MechService', () => {
  let service: MechService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechService],
    }).compile();

    service = module.get<MechService>(MechService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
