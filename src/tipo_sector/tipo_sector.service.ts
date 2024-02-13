import { Injectable } from '@nestjs/common';
import { CreateTipoSectorDto } from './dto/create-tipo_sector.dto';
import { UpdateTipoSectorDto } from './dto/update-tipo_sector.dto';

@Injectable()
export class TipoSectorService {
  create(createTipoSectorDto: CreateTipoSectorDto) {
    return 'This action adds a new tipoSector';
  }

  findAll() {
    return `This action returns all tipoSector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoSector`;
  }

  update(id: number, updateTipoSectorDto: UpdateTipoSectorDto) {
    return `This action updates a #${id} tipoSector`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoSector`;
  }
}
