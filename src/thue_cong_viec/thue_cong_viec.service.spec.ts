import { Test, TestingModule } from '@nestjs/testing';
import { ThueCongViecService } from './thue_cong_viec.service';

describe('ThueCongViecService', () => {
  let service: ThueCongViecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThueCongViecService],
    }).compile();

    service = module.get<ThueCongViecService>(ThueCongViecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
