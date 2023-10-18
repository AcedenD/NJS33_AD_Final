import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThueCongViecService } from './thue_cong_viec.service';
import { CreateThueCongViecDto } from './dto/create-thue_cong_viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue_cong_viec.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ThueCongViec")
@Controller('thue-cong-viec')
export class ThueCongViecController {
  constructor(private readonly thueCongViecService: ThueCongViecService) { }

  @Post()
  create(@Body() createThueCongViecDto: CreateThueCongViecDto) {
    return this.thueCongViecService.create(createThueCongViecDto);
  }

  @Get()
  findAll() {
    return this.thueCongViecService.findAll();
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
  remove(@Param('id') id: string) {
    return this.thueCongViecService.remove(+id);
  }
}
