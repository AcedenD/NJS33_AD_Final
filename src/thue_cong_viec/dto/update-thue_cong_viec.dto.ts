import { PartialType } from '@nestjs/swagger';
import { CreateThueCongViecDto } from './create-thue_cong_viec.dto';

export class UpdateThueCongViecDto extends PartialType(CreateThueCongViecDto) {}
