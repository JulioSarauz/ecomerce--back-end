import { Test, TestingModule } from '@nestjs/testing';
import { ProdsController } from './prods.controller';

describe('ProdsController', () => {
  let controller: ProdsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdsController],
    }).compile();

    controller = module.get<ProdsController>(ProdsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
