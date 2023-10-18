import { ApiProperty } from "@nestjs/swagger"

export class CreateBinhLuanDto {
  @ApiProperty()
  maCongViec: number
  @ApiProperty()
  noiDung: string
  @ApiProperty()
  saoBinhLuan: number
}
