import { Injectable } from '@nestjs/common';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi_tiet_loai_cong_viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi_tiet_loai_cong_viec.dto';

@Injectable()
export class ChiTietLoaiCongViecService {
  create(createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    return 'This action adds a new chiTietLoaiCongViec';
  }

  findAll() {
    return `This action returns all chiTietLoaiCongViec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chiTietLoaiCongViec`;
  }

  update(id: number, updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    return `This action updates a #${id} chiTietLoaiCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} chiTietLoaiCongViec`;
  }
}
