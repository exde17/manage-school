import { Injectable } from '@nestjs/common';
import { CreateDireccionGrupoDto } from './dto/create-direccion_grupo.dto';
import { UpdateDireccionGrupoDto } from './dto/update-direccion_grupo.dto';

@Injectable()
export class DireccionGrupoService {
  create(createDireccionGrupoDto: CreateDireccionGrupoDto) {
    return 'This action adds a new direccionGrupo';
  }

  findAll() {
    return `This action returns all direccionGrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} direccionGrupo`;
  }

  update(id: number, updateDireccionGrupoDto: UpdateDireccionGrupoDto) {
    return `This action updates a #${id} direccionGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} direccionGrupo`;
  }
}
