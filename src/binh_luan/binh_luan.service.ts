import { Injectable } from '@nestjs/common';
import { CreateBinhLuanDto } from './dto/create-binh_luan.dto';
import { UpdateBinhLuanDto } from './dto/update-binh_luan.dto';
import { PrismaClient } from '@prisma/client';
import { DeleteBinhLuanDto } from './dto/delete-binh-luan.dto';
import { returnMessage } from 'src/util/helper';

@Injectable()
export class BinhLuanService {

  constructor() { }

  model = new PrismaClient()

  async create(createBinhLuanDto: CreateBinhLuanDto, user_id: number) {
    let { maCongViec, noiDung, saoBinhLuan } = createBinhLuanDto

    const congViec = await this.model.congViec.findFirst({
      where: {
        id: maCongViec,
      }
    })

    if (congViec) {
      const binhLuan = await this.model.binhLuan.create({
        data: {
          ma_nguoi_binh_luan: user_id,
          ma_cong_viec: maCongViec,
          noi_dung: noiDung,
          sao_binh_luan: saoBinhLuan,
          ngay_binh_luan: new Date()
        }
      })

      return returnMessage("Thêm bình luận thành công", 200, binhLuan)
    }

    return "Không tìm thấy công việc";
  }

  async findAll() {
    return await this.model.binhLuan.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} binhLuan`;
  }

  async update(updateBinhLuanDto: UpdateBinhLuanDto, user_id: number) {
    let { binh_luan_id } = updateBinhLuanDto

    const binhLuan = await this.model.binhLuan.findFirst({
      where: {
        id: binh_luan_id,
      }
    })

    if (binhLuan) {
      if (binhLuan.ma_nguoi_binh_luan == user_id) {
        const updateBinhLuan = await this.model.binhLuan.update({
          where: {
            id: binh_luan_id
          },
          data: {
            noi_dung: updateBinhLuanDto.noiDung,
            sao_binh_luan: updateBinhLuanDto.saoBinhLuan
          }
        })

        return returnMessage("Cập nhật bình luận thành công", 200, updateBinhLuan)
      } else {
        return "Bạn kho được phép cập nhật bình luận này"
      }

    }

    return `Không tìm thấy bình luận`;

  }

  async remove(deleteBinhLuanDto: DeleteBinhLuanDto, user_id: number) {
    let { binh_luan_id } = deleteBinhLuanDto

    const binhLuan = await this.model.binhLuan.findFirst({
      where: {
        id: binh_luan_id,
      }
    })

    if (binhLuan) {
      if (binhLuan.ma_nguoi_binh_luan == user_id) {
        const deleteBinhLuan = await this.model.binhLuan.delete({
          where: {
            id: binh_luan_id
          }
        })

        return returnMessage("Xóa bình luận thành công", 200, deleteBinhLuan)
      } else {
        return "Bạn kho được phép xóa bình luận này"
      }
    }


    return `Không tìm thấy bình luận`;

  }

  async findAllByCongViec(id: number) {

    const congViec = await this.model.congViec.findFirst({
      where: {
        id: id
      }
    })



    if (congViec) {
      const binhLuan = await this.model.binhLuan.findMany({
        where: {
          ma_cong_viec: id
        }
      })
      return binhLuan
    }

    return "Không tìm thấy công việc";
  }
}
