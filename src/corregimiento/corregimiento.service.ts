import { Injectable } from '@nestjs/common';
import { CreateCorregimientoDto } from './dto/create-corregimiento.dto';
import { UpdateCorregimientoDto } from './dto/update-corregimiento.dto';

@Injectable()
export class CorregimientoService {
  create(createCorregimientoDto: CreateCorregimientoDto) {
    return 'This action adds a new corregimiento';
  }

  findAll() {
    return `This action returns all corregimiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corregimiento`;
  }

  update(id: number, updateCorregimientoDto: UpdateCorregimientoDto) {
    return `This action updates a #${id} corregimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} corregimiento`;
  }
}
