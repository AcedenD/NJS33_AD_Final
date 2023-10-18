import { Module } from '@nestjs/common';
import { ThueCongViecService } from './thue_cong_viec.service';
import { ThueCongViecController } from './thue_cong_viec.controller';

@Module({
  controllers: [ThueCongViecController],
  providers: [ThueCongViecService],
})
export class ThueCongViecModule {}
