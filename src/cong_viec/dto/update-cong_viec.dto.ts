import { PartialType } from '@nestjs/swagger';
import { CreateCongViecDto } from './create-cong_viec.dto';

export class UpdateCongViecDto extends PartialType(CreateCongViecDto) {}
