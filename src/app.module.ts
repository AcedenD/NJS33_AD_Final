import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthModule } from './auth/auth.module';
import { BinhLuanModule } from './binh_luan/binh_luan.module';

import { ChiTietLoaiCongViecModule } from './chi_tiet_loai_cong_viec/chi_tiet_loai_cong_viec.module';
import { CongViecModule } from './cong_viec/cong_viec.module';
import { LoaiCongViecModule } from './loai_cong_viec/loai_cong_viec.module';
import { NguoiDungModule } from './nguoi_dung/nguoi_dung.module';
import { ThueCongViecModule } from './thue_cong_viec/thue_cong_viec.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({
    isGlobal: true
  }), BinhLuanModule, ChiTietLoaiCongViecModule, CongViecModule, LoaiCongViecModule, NguoiDungModule, ThueCongViecModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule { }
