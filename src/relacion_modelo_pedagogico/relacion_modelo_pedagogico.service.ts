import { Injectable } from '@nestjs/common';
import { CreateRelacionModeloPedagogicoDto } from './dto/create-relacion_modelo_pedagogico.dto';
import { UpdateRelacionModeloPedagogicoDto } from './dto/update-relacion_modelo_pedagogico.dto';

@Injectable()
export class RelacionModeloPedagogicoService {
  create(createRelacionModeloPedagogicoDto: CreateRelacionModeloPedagogicoDto) {
    return 'This action adds a new relacionModeloPedagogico';
  }

  findAll() {
    return `This action returns all relacionModeloPedagogico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relacionModeloPedagogico`;
  }

  update(id: number, updateRelacionModeloPedagogicoDto: UpdateRelacionModeloPedagogicoDto) {
    return `This action updates a #${id} relacionModeloPedagogico`;
  }

  remove(id: number) {
    return `This action removes a #${id} relacionModeloPedagogico`;
  }
}
