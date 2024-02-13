import { Injectable } from '@nestjs/common';
import { CreateAcudienteDto } from './dto/create-acudiente.dto';
import { UpdateAcudienteDto } from './dto/update-acudiente.dto';

@Injectable()
export class AcudienteService {
  create(createAcudienteDto: CreateAcudienteDto) {
    return 'This action adds a new acudiente';
  }

  findAll() {
    return `This action returns all acudiente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acudiente`;
  }

  update(id: number, updateAcudienteDto: UpdateAcudienteDto) {
    return `This action updates a #${id} acudiente`;
  }

  remove(id: number) {
    return `This action removes a #${id} acudiente`;
  }
}
