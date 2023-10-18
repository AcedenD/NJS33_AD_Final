import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CongViecService } from './cong_viec.service';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("CongViec")
@Controller('cong-viec')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService) { }

  @Post()
  create(@Body() createCongViecDto: CreateCongViecDto) {
    return this.congViecService.create(createCongViecDto);
  }

  @Get()
  findAll() {
    return this.congViecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congViecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCongViecDto: UpdateCongViecDto) {
    return this.congViecService.update(+id, updateCongViecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.congViecService.remove(+id);
  }
}
