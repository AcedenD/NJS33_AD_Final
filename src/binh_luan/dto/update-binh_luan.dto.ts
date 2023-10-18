import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBinhLuanDto } from './create-binh_luan.dto';

export class UpdateBinhLuanDto extends PartialType(CreateBinhLuanDto) {
  @ApiProperty()
  binh_luan_id: number;
}
