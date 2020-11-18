import { Test, TestingModule } from '@nestjs/testing';
import { ProdsService } from './prods.service';

describe('ProdsService', () => {
  let service: ProdsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdsService],
    }).compile();

    service = module.get<ProdsService>(ProdsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
