import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseGuards, Req } from '@nestjs/common';
import { BinhLuanService } from './binh_luan.service';
import { CreateBinhLuanDto } from './dto/create-binh_luan.dto';
import { UpdateBinhLuanDto } from './dto/update-binh_luan.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getDataFromToken } from 'src/util/helper';
import { DeleteBinhLuanDto } from './dto/delete-binh-luan.dto';

@ApiTags("BinhLuan")
@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService) { }
  @Get()
  findAll() {
    return this.binhLuanService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post()
  create(@Body() createBinhLuanDto: CreateBinhLuanDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.binhLuanService.create(createBinhLuanDto, user_id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Patch()
  update(@Body() updateBinhLuanDto: UpdateBinhLuanDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.binhLuanService.update(updateBinhLuanDto, user_id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete()
  remove(@Body() deleteBinhLuanDto: DeleteBinhLuanDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.binhLuanService.remove(deleteBinhLuanDto, user_id);
  }
}
