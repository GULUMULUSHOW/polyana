import { Test, TestingModule } from '@nestjs/testing';
import { BlanketController } from './blanket.controller';

describe('BlanketController', () => {
  let controller: BlanketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlanketController],
    }).compile();

    controller = module.get<BlanketController>(BlanketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
