import { ApiProperty } from "@nestjs/swagger"

export class CreateThueCongViecDto {

  @ApiProperty()
  id: number
  @ApiProperty()
  maCongViec: number
  @ApiProperty()
  maNguoiThue: number
  @ApiProperty()
  hoanThanh: boolean
}
