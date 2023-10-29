import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi_tiet_loai_cong_viec.service';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi_tiet_loai_cong_viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi_tiet_loai_cong_viec.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileUploadDto } from 'src/cong_viec/dto/upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { getDataFromToken } from 'src/util/helper';
import { Request } from 'express';


@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
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

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @Post('/them-hinh-anh/:MaChiTietLoai')
  @UseInterceptors(FileInterceptor('hinhAnh', {
    storage: diskStorage({
      destination: process.cwd() + '/public/img',
      filename: (req, file, callback) => callback(null, new Date().getTime() + file.originalname)
    })
  }))
  uploadHinhAnh(@UploadedFile() file, @Param('MaChiTietLoai') id: string, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.chiTietLoaiCongViecService.uploadHinhAnh(file, +id, +user_id);
  }
}
