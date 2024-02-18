import { Injectable } from '@nestjs/common';
import { CreateCategoriaHorarioDto } from './dto/create-categoria_horario.dto';
import { UpdateCategoriaHorarioDto } from './dto/update-categoria_horario.dto';

@Injectable()
export class CategoriaHorarioService {
  create(createCategoriaHorarioDto: CreateCategoriaHorarioDto) {
    return 'This action adds a new categoriaHorario';
  }

  findAll() {
    return `This action returns all categoriaHorario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaHorario`;
  }

  update(id: number, updateCategoriaHorarioDto: UpdateCategoriaHorarioDto) {
    return `This action updates a #${id} categoriaHorario`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaHorario`;
  }
}
