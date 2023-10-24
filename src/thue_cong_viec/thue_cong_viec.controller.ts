import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ThueCongViecService } from './thue_cong_viec.service';
import { CreateThueCongViecDto } from './dto/create-thue_cong_viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue_cong_viec.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getDataFromToken } from 'src/util/helper';


@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@ApiTags("ThueCongViec")
@Controller('thue-cong-viec')
export class ThueCongViecController {
  constructor(private readonly thueCongViecService: ThueCongViecService) { }


  @Get()
  findAll() {
    return this.thueCongViecService.findAll();
  }


  @Post()
  create(@Body() createThueCongViecDto: CreateThueCongViecDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.thueCongViecService.create(createThueCongViecDto, user_id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thueCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThueCongViecDto: UpdateThueCongViecDto) {
    return this.thueCongViecService.update(+id, updateThueCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.thueCongViecService.remove(+id, user_id);
  }

  @Post('lay-danh-sach-da-thue')
  layDanhSachDaThue(@Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.thueCongViecService.layDanhSachDaThue(user_id);
  }


  @Post('hoan-thanh-cong-viec/:MaThueCongViec')
  hoanThanhCongViec(@Param('MaThueCongViec') id: string) {
    return this.thueCongViecService.hoanThanhCongViec(+id);
  }
}
