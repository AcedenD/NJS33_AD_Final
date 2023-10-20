import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CongViecService } from './cong_viec.service';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getDataFromToken } from 'src/util/helper';

@ApiTags("CongViec")
@Controller('cong-viec')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) { }

  @Get()
  findAll() {
    return this.congViecService.findAll();
  }


  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post()
  create(@Body() createCongViecDto: CreateCongViecDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.congViecService.create(createCongViecDto, user_id);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congViecService.findOne(+id);
  }


  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCongViecDto: UpdateCongViecDto, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.congViecService.update(+id, updateCongViecDto, user_id);
  }


  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.congViecService.remove(+id, user_id);
  }
}
