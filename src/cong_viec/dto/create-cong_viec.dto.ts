import { ApiProperty } from "@nestjs/swagger";

export class CreateCongViecDto {
  @ApiProperty()
  id: number
  @ApiProperty()
  tenCongViec: string
  @ApiProperty()
  danhGia: number
  @ApiProperty()
  giaTien: number
  @ApiProperty()
  nguoiTao: number
  @ApiProperty()
  hinhAnh: string
  @ApiProperty()
  moTa: string
  @ApiProperty()
  maChiTietLoaiCongViec: number
  @ApiProperty()
  moTaNgan: string
  @ApiProperty()
  saoCongViec: number
}
