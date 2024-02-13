import { Injectable } from '@nestjs/common';
import { CreateHistoricoDireccionGrupoDto } from './dto/create-historico_direccion_grupo.dto';
import { UpdateHistoricoDireccionGrupoDto } from './dto/update-historico_direccion_grupo.dto';

@Injectable()
export class HistoricoDireccionGrupoService {
  create(createHistoricoDireccionGrupoDto: CreateHistoricoDireccionGrupoDto) {
    return 'This action adds a new historicoDireccionGrupo';
  }

  findAll() {
    return `This action returns all historicoDireccionGrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicoDireccionGrupo`;
  }

  update(id: number, updateHistoricoDireccionGrupoDto: UpdateHistoricoDireccionGrupoDto) {
    return `This action updates a #${id} historicoDireccionGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicoDireccionGrupo`;
  }
}
