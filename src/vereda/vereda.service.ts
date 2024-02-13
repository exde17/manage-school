import { Injectable } from '@nestjs/common';
import { CreateVeredaDto } from './dto/create-vereda.dto';
import { UpdateVeredaDto } from './dto/update-vereda.dto';

@Injectable()
export class VeredaService {
  create(createVeredaDto: CreateVeredaDto) {
    return 'This action adds a new vereda';
  }

  findAll() {
    return `This action returns all vereda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vereda`;
  }

  update(id: number, updateVeredaDto: UpdateVeredaDto) {
    return `This action updates a #${id} vereda`;
  }

  remove(id: number) {
    return `This action removes a #${id} vereda`;
  }
}
