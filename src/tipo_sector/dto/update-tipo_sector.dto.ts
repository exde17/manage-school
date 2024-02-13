import { PartialType } from '@nestjs/swagger';
import { CreateTipoSectorDto } from './create-tipo_sector.dto';

export class UpdateTipoSectorDto extends PartialType(CreateTipoSectorDto) {}
