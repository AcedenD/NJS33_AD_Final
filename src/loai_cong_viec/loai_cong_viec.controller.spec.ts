import { Test, TestingModule } from '@nestjs/testing';
import { LoaiCongViecController } from './loai_cong_viec.controller';
import { LoaiCongViecService } from './loai_cong_viec.service';

describe('LoaiCongViecController', () => {
  let controller: LoaiCongViecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoaiCongViecController],
      providers: [LoaiCongViecService],
    }).compile();

    controller = module.get<LoaiCongViecController>(LoaiCongViecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
