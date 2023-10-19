import { Injectable } from '@nestjs/common';
import { CreateLoaiCongViecDto } from './dto/create-loai_cong_viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai_cong_viec.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';

@Injectable()
export class LoaiCongViecService {

  constructor() { }

  model = new PrismaClient();
  async create(createLoaiCongViecDto: CreateLoaiCongViecDto) {

    let { tenLoaiCongViec } = createLoaiCongViecDto


    return returnMessage("Tạo loại công việc thành công", await this.model.loaiCongViec.create({
      data: {
        ten_loai_cong_viec: tenLoaiCongViec
      }
    }))
  }

  async findAll() {
    return await this.model.loaiCongViec.findMany();
  }

  async findOne(id: number) {
    const loaiCongViec = await this.model.loaiCongViec.findUnique({
      where: {
        id
      }
    })

    if (loaiCongViec) {
      return loaiCongViec
    }

    return "Không tìm thấy loại công việc";
  }

  update(id: number, updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return `This action updates a #${id} loaiCongViec`;
  }

  async remove(id: number) {
    const loaiCongViec = await this.model.loaiCongViec.findUnique({
      where: {
        id
      }
    })

    if (loaiCongViec) {
      return returnMessage("Xóa loại công việc thành công", await this.model.loaiCongViec.delete({
        where: {
          id
        }
      }))
    }

    return "Không tìm thấy loại công việc";
  }
}
