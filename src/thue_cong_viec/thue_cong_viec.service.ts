import { Injectable } from '@nestjs/common';
import { CreateThueCongViecDto } from './dto/create-thue_cong_viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue_cong_viec.dto';

@Injectable()
export class ThueCongViecService {
  create(createThueCongViecDto: CreateThueCongViecDto) {
    return 'This action adds a new thueCongViec';
  }

  findAll() {
    return `This action returns all thueCongViec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thueCongViec`;
  }

  update(id: number, updateThueCongViecDto: UpdateThueCongViecDto) {
    return `This action updates a #${id} thueCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} thueCongViec`;
  }
}
