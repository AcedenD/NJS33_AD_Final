import { ApiProperty } from "@nestjs/swagger"

export class CreateAuthDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  pass_word: string

  @ApiProperty()
  name: string

  @ApiProperty()
  phone: string

  @ApiProperty()
  birth_day: string


}
