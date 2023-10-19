import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi_tiet_loai_cong_viec.service';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi_tiet_loai_cong_viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi_tiet_loai_cong_viec.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ChiTietLoaiCongViec")
@Controller('chi-tiet-loai-cong-viec')
export class ChiTietLoaiCongViecController {
  constructor(private readonly chiTietLoaiCongViecService: ChiTietLoaiCongViecService) { }


  @Get()
  findAll() {
    return this.chiTietLoaiCongViecService.findAll();
  }

  @Post()
  create(@Body() createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    return this.chiTietLoaiCongViecService.create(createChiTietLoaiCongViecDto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chiTietLoaiCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    return this.chiTietLoaiCongViecService.update(+id, updateChiTietLoaiCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chiTietLoaiCongViecService.remove(+id);
  }
}
