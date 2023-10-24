import { Injectable } from '@nestjs/common';
import { CreateThueCongViecDto } from './dto/create-thue_cong_viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue_cong_viec.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';

@Injectable()
export class ThueCongViecService {

  constructor() { }

  model = new PrismaClient()

  async create(createThueCongViecDto: CreateThueCongViecDto, user_id: number) {
    let { maCongViec } = createThueCongViecDto
    const congViec = await this.model.congViec.findFirst({
      where: {
        id: maCongViec,
      }
    })

    if (congViec) {
      const thueCongViec = await this.model.thueCongViec.create({
        data: {
          ma_cong_viec: maCongViec,
          ma_nguoi_thue: user_id,
          ngay_thue: new Date(),
          hoan_thanh: false
        }
      })

      return returnMessage("Thêm thuê công việc thành công", 200, thueCongViec)
    }

    return 'This action adds a new thueCongViec';
  }

  async findAll() {
    return returnMessage("Lấy danh sách thuê công việc thành công", 200, await this.model.thueCongViec.findMany());
  }

  async findOne(id: number) {
    const thueCongViec = await this.model.thueCongViec.findUnique({
      where: {
        id
      }
    })

    if (thueCongViec) {
      return returnMessage("Lấy thông tin thuê công việc thành công", 200, thueCongViec)
    }

    return "Không tìm thấy thuê công việc";
  }

  async update(id: number, updateThueCongViecDto: UpdateThueCongViecDto) {
    let { maCongViec, hoanThanh, maNguoiThue } = updateThueCongViecDto
    const thueCongViec = await this.model.thueCongViec.findUnique({
      where: {
        id
      }
    })

    if (thueCongViec) {
      return returnMessage("Cập nhật thuê công việc thành công", 200, await this.model.thueCongViec.update({
        where: {
          id
        },
        data: {
          ngay_thue: new Date(),
          hoan_thanh: hoanThanh
        }
      }))
    }

    return "Không tìm thấy thuê công việc";
  }

  async remove(id: number, user_id: number) {
    const thueCongViec = await this.model.thueCongViec.findUnique({
      where: {
        id
      }
    })

    if (thueCongViec) {
      if (thueCongViec.ma_nguoi_thue == user_id) {
        return returnMessage("Xóa thuê công việc thành công", 200, await this.model.thueCongViec.delete({
          where: {
            id
          }
        }))
      }

      return "Bạn không có quyền xóa thuê công việc này"
    }
    return "Không tìm thấy thuê công việc";
  }

  async layDanhSachDaThue(user_id: number) {
    const thueCongViec = await this.model.thueCongViec.findMany({
      where: {
        ma_nguoi_thue: user_id
      }
    })

    return returnMessage("Lấy danh sách thuê công việc thành công", 200, thueCongViec)
  }

  async hoanThanhCongViec(id: number) {
    const thueCongViec = await this.model.thueCongViec.findUnique({
      where: {
        id
      }
    })

    if (thueCongViec) {
      return returnMessage("Hoàn thành thuê công việc thành công", 200, await this.model.thueCongViec.update({
        where: {
          id
        },
        data: {
          ngay_thue: new Date(),
          hoan_thanh: true
        }
      }))
    }

    return "Không tìm thấy thuê công việc";
  }

}
