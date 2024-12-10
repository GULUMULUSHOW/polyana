import { Test, TestingModule } from '@nestjs/testing';
import { BlanketService } from './blanket.service';

describe('BlanketService', () => {
  let service: BlanketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlanketService],
    }).compile();

    service = module.get<BlanketService>(BlanketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
