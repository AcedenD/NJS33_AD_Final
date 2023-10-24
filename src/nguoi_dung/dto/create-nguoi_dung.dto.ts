import { ApiProperty } from "@nestjs/swagger";

export class CreateNguoiDungDto {

  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  phone: string

  @ApiProperty()
  birthday: string

  @ApiProperty()
  gender: string

  @ApiProperty()
  role: string

  @ApiProperty()
  skill:
    string

  @ApiProperty()
  certification:
    string


}
