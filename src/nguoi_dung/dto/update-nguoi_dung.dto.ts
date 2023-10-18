import { PartialType } from '@nestjs/swagger';
import { CreateNguoiDungDto } from './create-nguoi_dung.dto';

export class UpdateNguoiDungDto extends PartialType(CreateNguoiDungDto) {}
