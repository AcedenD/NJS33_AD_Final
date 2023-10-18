import { Module } from '@nestjs/common';
import { CongViecService } from './cong_viec.service';
import { CongViecController } from './cong_viec.controller';

@Module({
  controllers: [CongViecController],
  providers: [CongViecService],
})
export class CongViecModule {}
