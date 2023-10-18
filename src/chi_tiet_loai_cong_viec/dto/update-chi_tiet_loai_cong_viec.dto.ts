import { PartialType } from '@nestjs/swagger';
import { CreateChiTietLoaiCongViecDto } from './create-chi_tiet_loai_cong_viec.dto';

export class UpdateChiTietLoaiCongViecDto extends PartialType(CreateChiTietLoaiCongViecDto) {}
