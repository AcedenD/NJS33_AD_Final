import { PartialType } from '@nestjs/swagger';
import { CreateLoaiCongViecDto } from './create-loai_cong_viec.dto';

export class UpdateLoaiCongViecDto extends PartialType(CreateLoaiCongViecDto) {}
