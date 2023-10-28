import { Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi_dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi_dung.dto';
import { PrismaClient } from '@prisma/client';
import { returnMessage } from 'src/util/helper';
import { DeleteNguoiDungDto } from './dto/delete-nguoi-dung.dto';
import { unlinkSync } from 'fs';

@Injectable()
export class NguoiDungService {

  constructor() { }

  model = new PrismaClient()

  async create(createNguoiDungDto: CreateNguoiDungDto) {
    let {
      name,
      email,
      password,
      phone,
      birthday,
      gender,
      role,
      skill,
      certification,
    } = createNguoiDungDto;

    const data = await this.model.nguoiDung.findFirst({
      where: {
        email
      }
    })

    if (data) {
      return 'Email đã tồn tại'
    }

    return returnMessage("Đăng ký thành công", 200, await this.model.nguoiDung.create({
      data: {
        name,
        email,
        pass_word: password,
        phone,
        birth_day: birthday,
        gender,
        role,
        skill,
        certification
      }
    }));
  }

  async findAll() {
    const nguoiDung = await this.model.nguoiDung.findMany();

    return nguoiDung;
  }
  async findOne(id: number) {
    const nguoiDung = await this.model.nguoiDung.findUnique({
      where: {
        id
      }
    })

    if (nguoiDung) {
      return nguoiDung;

    }

    return "Không tìm thấy người dùng";
  }

  async update(id: number, updateNguoiDungDto: UpdateNguoiDungDto, user_id: number) {
    let { name, email, password, phone, birthday, gender, role, skill, certification } = updateNguoiDungDto;
    const nguoiDung = await this.model.nguoiDung.findUnique({
      where: {
        id
      }
    })

    if (nguoiDung) {
      if (nguoiDung.id == user_id) {
        return returnMessage("Cập nhật người dùng thành công", 200, await this.model.nguoiDung.update({
          where: {
            id
          },
          data: {
            name,
            email,
            pass_word: password,
            phone,
            birth_day: birthday,
            gender,
            role,
            skill,
            certification
          }
        }))
      }

      return "Bạn không có quyền cập nhật người dùng này";

    }

    return "Không tìm thấy người dùng";
  }

  async search(tenNguoiDung: string) {
    const nguoiDung = await this.model.nguoiDung.findMany({
      where: {
        name: {
          contains: tenNguoiDung
        }
      }
    })

    if (nguoiDung) {
      return returnMessage("Tìm kiếm thành công", 200, nguoiDung);
    }

    return "Không tìm thấy người dùng";
  }

  async remove(deleteNguoiDungDto: DeleteNguoiDungDto, user_id: number) {
    let { id, password } = deleteNguoiDungDto

    const nguoiDung = await this.model.nguoiDung.findUnique({
      where: {
        id
      }
    })

    if (nguoiDung) {
      if (nguoiDung.id == user_id && nguoiDung.pass_word == password) {
        return returnMessage("Xóa người dùng thành công", 200, await this.model.nguoiDung.delete({
          where: {
            id
          }
        }))
      }

      return "Bạn không có quyền xóa người dùng này";
    }

    return "Không tìm thấy người dùng";
  }



}
