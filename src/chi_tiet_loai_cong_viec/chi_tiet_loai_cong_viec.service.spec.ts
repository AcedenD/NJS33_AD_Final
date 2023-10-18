import { Test, TestingModule } from '@nestjs/testing';
import { ChiTietLoaiCongViecService } from './chi_tiet_loai_cong_viec.service';

describe('ChiTietLoaiCongViecService', () => {
  let service: ChiTietLoaiCongViecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChiTietLoaiCongViecService],
    }).compile();

    service = module.get<ChiTietLoaiCongViecService>(ChiTietLoaiCongViecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
