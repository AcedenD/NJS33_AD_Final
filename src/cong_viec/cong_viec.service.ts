import { Injectable } from '@nestjs/common';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';

@Injectable()
export class CongViecService {

  constructor() { }

  model = new PrismaClient()

  // TODO
  create(createCongViecDto: CreateCongViecDto, user_id: number) {
    return 'This action adds a new congViec';
  }

  async findAll() {
    return await this.model.congViec.findMany();
  }

  async findOne(id: number) {
    const congViec = await this.model.congViec.findFirst({
      where: {
        id
      }
    })

    if (congViec) {
      return congViec
    }

    return "Không tìm thấy công việc";
  }

  // TODO 
  update(id: number, updateCongViecDto: UpdateCongViecDto, user_id: number) {
    return `This action updates a #${id} congViec`;
  }

  async remove(id: number, user_id: number) {
    const congViec = await this.model.congViec.findFirst({
      where: {
        id
      }
    })


    if (congViec) {
      if (congViec.nguoi_tao == user_id) {
        const deleteBinhLuan = await this.model.binhLuan.deleteMany({
          where: {
            ma_cong_viec: id
          }
        })
        return returnMessage("Xóa công việc thành công", await this.model.congViec.delete({
          where: {
            id
          }
        }))
      }

      return "Bạn không có quyền xóa công việc này"
    }

    return "Không tìm thấy công việc";
  }
}
