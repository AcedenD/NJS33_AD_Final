import { ApiProperty } from "@nestjs/swagger";

export class CreateLoaiCongViecDto {
  @ApiProperty()
  id: number
  @ApiProperty()
  tenLoaiCongViec: string
}
