import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { NguoiDungService } from './nguoi_dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi_dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi_dung.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getDataFromToken } from 'src/util/helper';
import { DeleteNguoiDungDto } from './dto/delete-nguoi-dung.dto';



@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@ApiTags("NguoiDung")
@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) { }

  @Get()
  findAll() {
    return this.nguoiDungService.findAll();
  }

  @Post()
  create(@Body() createNguoiDungDto: CreateNguoiDungDto) {
    return this.nguoiDungService.create(createNguoiDungDto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nguoiDungService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNguoiDungDto: UpdateNguoiDungDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.nguoiDungService.update(+id, updateNguoiDungDto, user_id);
  }

  @Get('search/:tenNguoiDung')
  search(@Param('tenNguoiDung') tenNguoiDung: string) {
    return this.nguoiDungService.search(tenNguoiDung);
  }


  @Delete()
  remove(@Body() deleteNguoiDungDto: DeleteNguoiDungDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.nguoiDungService.remove(deleteNguoiDungDto, user_id);
  }



}
