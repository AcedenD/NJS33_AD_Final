import { ApiProperty } from "@nestjs/swagger";

export class CreateChiTietLoaiCongViecDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  ten_chi_tiet: string;
  @ApiProperty()
  ma_loai_cong_viec: number;


}
