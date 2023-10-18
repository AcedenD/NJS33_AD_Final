import { Module } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi_tiet_loai_cong_viec.service';
import { ChiTietLoaiCongViecController } from './chi_tiet_loai_cong_viec.controller';

@Module({
  controllers: [ChiTietLoaiCongViecController],
  providers: [ChiTietLoaiCongViecService],
})
export class ChiTietLoaiCongViecModule {}
