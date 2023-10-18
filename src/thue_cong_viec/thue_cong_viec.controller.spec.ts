import { Test, TestingModule } from '@nestjs/testing';
import { ThueCongViecController } from './thue_cong_viec.controller';
import { ThueCongViecService } from './thue_cong_viec.service';

describe('ThueCongViecController', () => {
  let controller: ThueCongViecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThueCongViecController],
      providers: [ThueCongViecService],
    }).compile();

    controller = module.get<ThueCongViecController>(ThueCongViecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
