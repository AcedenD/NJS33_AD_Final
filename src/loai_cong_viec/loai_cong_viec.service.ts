import { Injectable } from '@nestjs/common';
import { CreateLoaiCongViecDto } from './dto/create-loai_cong_viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai_cong_viec.dto';

@Injectable()
export class LoaiCongViecService {
  create(createLoaiCongViecDto: CreateLoaiCongViecDto) {
    return 'This action adds a new loaiCongViec';
  }

  findAll() {
    return `This action returns all loaiCongViec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loaiCongViec`;
  }

  update(id: number, updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return `This action updates a #${id} loaiCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} loaiCongViec`;
  }
}
