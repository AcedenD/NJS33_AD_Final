import { Injectable } from '@nestjs/common';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';
import { unlinkSync } from 'fs';

@Injectable()
export class CongViecService {

  constructor() { }

  model = new PrismaClient()


  async create(createCongViecDto: CreateCongViecDto, user_id: number) {
    let { tenCongViec, danhGia, giaTien, hinhAnh, moTa, maChiTietLoaiCongViec, moTaNgan, saoCongViec } = createCongViecDto

    const chiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.findFirst({
      where: {
        id: maChiTietLoaiCongViec
      }
    })

    if (chiTietLoaiCongViec) {

      const congViec = await this.model.congViec.create({
        data: {
          ten_cong_viec: tenCongViec,
          danh_gia: danhGia,
          gia_tien: giaTien,
          hinh_anh: hinhAnh,
          mo_ta: moTa,
          ma_chi_tiet_loai: maChiTietLoaiCongViec,
          mo_ta_ngan: moTaNgan,
          sao_cong_viec: saoCongViec,
          nguoi_tao: user_id
        }
      })

      return returnMessage("Tạo công việc thành công", 200, congViec)
    }

    return "Không tìm thấy chi tiết loại công việc";
  }

  async findAll() {
    return await this.model.congViec.findMany();
  }


  async findOne(cong_viec_id: number) {
    const congViec = await this.model.congViec.findFirst({

    })

    if (congViec) {
      // return congViec
      return "return from findOne"
    }

    return "Không tìm thấy công việc";
  }


  async update(id: number, updateCongViecDto: UpdateCongViecDto, user_id: number) {
    let { tenCongViec, danhGia, giaTien, hinhAnh, moTa, maChiTietLoaiCongViec, moTaNgan, saoCongViec } = updateCongViecDto

    const congViec = await this.model.congViec.findFirst({
      where: {
        id
      }
    })

    const chiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.findFirst({
      where: {
        id: maChiTietLoaiCongViec
      }
    })

    if (congViec) {
      if (chiTietLoaiCongViec) {
        if (congViec.nguoi_tao == user_id) {
          return returnMessage("Cập nhật công việc thành công", 200, await this.model.congViec.update({
            where: {
              id
            },
            data: {
              ten_cong_viec: tenCongViec,
              danh_gia: danhGia,
              gia_tien: giaTien,
              hinh_anh: hinhAnh,
              mo_ta: moTa,
              ma_chi_tiet_loai: maChiTietLoaiCongViec,
              mo_ta_ngan: moTaNgan,
              sao_cong_viec: saoCongViec
            }
          }))
        }
        return "Bạn không có quyền cập nhật công việc này"
      }
      return "Không tìm chi tiết loại công việc"
    }
    return "Không tìm thấy công việc";
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
        return returnMessage("Xóa công việc thành công", 200, await this.model.congViec.delete({
          where: {
            id
          }
        }))
      }

      return "Bạn không có quyền xóa công việc này"
    }

    return "Không tìm thấy công việc";
  }

  async uploadHinhAnh(file, id: number, user_id: number) {
    const congViec = await this.model.congViec.findFirst({
      where: {
        id
      }
    })

    if (congViec) {
      if (congViec.nguoi_tao == user_id) {
        return returnMessage("Thêm ảnh công việc thành công", 200, await this.model.congViec.update({
          where: {
            id
          },
          data: {
            hinh_anh: file.path
          }
        }))

      }

      unlinkSync(file.path)

      return "Bạn không có quyền cập nhật công việc này"

    }

    unlinkSync(file.path)
    return "Không tìm thấy công việc";
  }

  async layMenuLoai() {
    const menuLoai = await this.model.loaiCongViec.findMany({
      include: {
        ChiTietLoaiCongViec: true
      }
    }
    )

    if (menuLoai) {
      return menuLoai
    }

    return "Không tìm thấy loại công việc";

  }

  async layCongViecTheoChiTiet(id: number) {
    const chiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.findUnique({
      where: {
        id
      }
    })

    if (chiTietLoaiCongViec) {
      const congViec = await this.model.congViec.findMany({
        where: {
          ma_chi_tiet_loai: id
        }
      })
      return congViec
    }

    return "Không tìm thấy chi tiết loại công việc";

  }

  async layCongViecChiTiet(id: number) {
    const congViec = await this.model.congViec.findUnique({
      where: {
        id
      },

    })

    if (congViec) {
      const nguoiTao = await this.model.nguoiDung.findUnique({
        where: {
          id: congViec.nguoi_tao
        }
      })
      const chiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.findUnique({
        where: {
          id: congViec.ma_chi_tiet_loai
        }
      })
      return { ...congViec, tenNguoiTao: nguoiTao.name, tenChiTietLoai: chiTietLoaiCongViec.ten_chi_tiet }
    }

    return "Không tìm thấy công việc";
  }

  async layCongViecTheoTen(tenCongViec: string) {
    const congViec = await this.model.congViec.findMany({
      where: {
        ten_cong_viec: {
          contains: tenCongViec
        }
      }
    })

    if (congViec) {
      return congViec
    }

    return "Không tìm thấy công việc";
  }
}
