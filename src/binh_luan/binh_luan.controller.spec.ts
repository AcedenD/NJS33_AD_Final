import { Test, TestingModule } from '@nestjs/testing';
import { BinhLuanController } from './binh_luan.controller';
import { BinhLuanService } from './binh_luan.service';

describe('BinhLuanController', () => {
  let controller: BinhLuanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinhLuanController],
      providers: [BinhLuanService],
    }).compile();

    controller = module.get<BinhLuanController>(BinhLuanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
