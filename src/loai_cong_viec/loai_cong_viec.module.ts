import { Module } from '@nestjs/common';
import { LoaiCongViecService } from './loai_cong_viec.service';
import { LoaiCongViecController } from './loai_cong_viec.controller';

@Module({
  controllers: [LoaiCongViecController],
  providers: [LoaiCongViecService],
})
export class LoaiCongViecModule {}
