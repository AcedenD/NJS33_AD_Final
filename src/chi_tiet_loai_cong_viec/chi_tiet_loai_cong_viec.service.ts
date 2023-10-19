import { Injectable } from '@nestjs/common';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi_tiet_loai_cong_viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi_tiet_loai_cong_viec.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';

@Injectable()
export class ChiTietLoaiCongViecService {

  constructor() { }

  model = new PrismaClient()

  async create(createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    let { ma_loai_cong_viec, ten_chi_tiet } = createChiTietLoaiCongViecDto

    const loaiCongViec = await this.model.loaiCongViec.findFirst({
      where: {
        id: ma_loai_cong_viec
      }
    })

    if (loaiCongViec) {
      return returnMessage("Tạo chi tiết loại công việc thành công", await this.model.chiTietLoaiCongViec.create({
        data: {
          ma_loai_cong_viec: ma_loai_cong_viec,
          ten_chi_tiet: ten_chi_tiet
        }
      }))
    }


    return "Không tìm thấy loại công việc";
  }

  async findAll() {
    return await this.model.chiTietLoaiCongViec.findMany();
  }

  async findOne(id: number) {
    const chiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.findUnique({
      where: {
        id
      }
    })

    if (chiTietLoaiCongViec) {
      return chiTietLoaiCongViec
    }

    return "Không tìm thấy chi tiết loại công việc";
  }

  update(id: number, updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    return `This action updates a #${id} chiTietLoaiCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} chiTietLoaiCongViec`;
  }
}
