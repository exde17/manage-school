import { Injectable } from '@nestjs/common';
import { CreateModeloPedagogicoDto } from './dto/create-modelo_pedagogico.dto';
import { UpdateModeloPedagogicoDto } from './dto/update-modelo_pedagogico.dto';

@Injectable()
export class ModeloPedagogicoService {
  create(createModeloPedagogicoDto: CreateModeloPedagogicoDto) {
    return 'This action adds a new modeloPedagogico';
  }

  findAll() {
    return `This action returns all modeloPedagogico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modeloPedagogico`;
  }

  update(id: number, updateModeloPedagogicoDto: UpdateModeloPedagogicoDto) {
    return `This action updates a #${id} modeloPedagogico`;
  }

  remove(id: number) {
    return `This action removes a #${id} modeloPedagogico`;
  }
}
