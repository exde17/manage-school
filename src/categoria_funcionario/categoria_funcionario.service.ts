import { Injectable } from '@nestjs/common';
import { CreateCategoriaFuncionarioDto } from './dto/create-categoria_funcionario.dto';
import { UpdateCategoriaFuncionarioDto } from './dto/update-categoria_funcionario.dto';

@Injectable()
export class CategoriaFuncionarioService {
  create(createCategoriaFuncionarioDto: CreateCategoriaFuncionarioDto) {
    return 'This action adds a new categoriaFuncionario';
  }

  findAll() {
    return `This action returns all categoriaFuncionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaFuncionario`;
  }

  update(id: number, updateCategoriaFuncionarioDto: UpdateCategoriaFuncionarioDto) {
    return `This action updates a #${id} categoriaFuncionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaFuncionario`;
  }
}
