import { Injectable } from '@nestjs/common';
import { CreateTipoEmpresaDto } from './dto/create-tipo_empresa.dto';
import { UpdateTipoEmpresaDto } from './dto/update-tipo_empresa.dto';

@Injectable()
export class TipoEmpresaService {
  create(createTipoEmpresaDto: CreateTipoEmpresaDto) {
    return 'This action adds a new tipoEmpresa';
  }

  findAll() {
    return `This action returns all tipoEmpresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEmpresa`;
  }

  update(id: number, updateTipoEmpresaDto: UpdateTipoEmpresaDto) {
    return `This action updates a #${id} tipoEmpresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEmpresa`;
  }
}
