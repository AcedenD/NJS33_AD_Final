import { Injectable } from '@nestjs/common';
import { CreateCongViecDto } from './dto/create-cong_viec.dto';
import { UpdateCongViecDto } from './dto/update-cong_viec.dto';

@Injectable()
export class CongViecService {
  create(createCongViecDto: CreateCongViecDto) {
    return 'This action adds a new congViec';
  }

  findAll() {
    return `This action returns all congViec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} congViec`;
  }

  update(id: number, updateCongViecDto: UpdateCongViecDto) {
    return `This action updates a #${id} congViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} congViec`;
  }
}
