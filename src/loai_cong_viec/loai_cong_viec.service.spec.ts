import { Test, TestingModule } from '@nestjs/testing';
import { LoaiCongViecService } from './loai_cong_viec.service';

describe('LoaiCongViecService', () => {
  let service: LoaiCongViecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoaiCongViecService],
    }).compile();

    service = module.get<LoaiCongViecService>(LoaiCongViecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
