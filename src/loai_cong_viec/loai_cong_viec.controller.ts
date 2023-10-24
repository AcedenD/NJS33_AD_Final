import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoaiCongViecService } from './loai_cong_viec.service';
import { CreateLoaiCongViecDto } from './dto/create-loai_cong_viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai_cong_viec.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@ApiTags("LoaiCongViec")
@Controller('loai-cong-viec')
export class LoaiCongViecController {
  constructor(private readonly loaiCongViecService: LoaiCongViecService) { }

  @Get()
  findAll() {
    return this.loaiCongViecService.findAll();
  }

  @Post()
  create(@Body() createLoaiCongViecDto: CreateLoaiCongViecDto) {
    return this.loaiCongViecService.create(createLoaiCongViecDto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiCongViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return this.loaiCongViecService.update(+id, updateLoaiCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiCongViecService.remove(+id);
  }
}
