import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CongViecService } from './cong_viec.service';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getDataFromToken } from 'src/util/helper';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadDto } from './dto/upload.dto';

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

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @Post('/them-hinh-anh/:MaCongViec')
  @UseInterceptors(FileInterceptor('hinhAnh', {
    storage: diskStorage({
      destination: process.cwd() + '/public/img',
      filename: (req, file, callback) => callback(null, new Date().getTime() + file.originalname)
    })
  }))
  uploadHinhAnh(@UploadedFile() file, @Param('MaCongViec') id: string, @Req() req: Request) {
    const nguoi_dung = getDataFromToken(req)
    let user_id = nguoi_dung.id
    return this.congViecService.uploadHinhAnh(file, +id, +user_id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post('lay-menu-loai-cong-viec')
  layMenuLoaiCongViec() {
    return this.congViecService.layMenuLoai();
  }

  @Get('lay-cong-viec-theo-chi-tiet/:MaChiTietLoai')
  layCongViecTheoChiTiet(@Param('MaChiTietLoai') id: string) {
    return this.congViecService.layCongViecTheoChiTiet(+id);
  }

  @Get('lay-cong-viec-chi-tiet/:MaCongViec')
  layCongViecChiTiet(@Param('MaCongViec') id: string) {
    return this.congViecService.layCongViecChiTiet(+id);
  }

  @Get('lay-danh-sach-cong-viec-theo-ten/:TenCongViec')
  layCongViecTheoTen(@Param('TenCongViec') ten: string) {
    return this.congViecService.layCongViecTheoTen(ten);
  }


}
