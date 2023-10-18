import { Test, TestingModule } from '@nestjs/testing';
import { ChiTietLoaiCongViecController } from './chi_tiet_loai_cong_viec.controller';
import { ChiTietLoaiCongViecService } from './chi_tiet_loai_cong_viec.service';

describe('ChiTietLoaiCongViecController', () => {
  let controller: ChiTietLoaiCongViecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChiTietLoaiCongViecController],
      providers: [ChiTietLoaiCongViecService],
    }).compile();

    controller = module.get<ChiTietLoaiCongViecController>(ChiTietLoaiCongViecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
