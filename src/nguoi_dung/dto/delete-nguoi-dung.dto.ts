import { ApiProperty } from "@nestjs/swagger";

export class DeleteNguoiDungDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  password: string
}