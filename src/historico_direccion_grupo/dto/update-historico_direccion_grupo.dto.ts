import { PartialType } from '@nestjs/swagger';
import { CreateHistoricoDireccionGrupoDto } from './create-historico_direccion_grupo.dto';

export class UpdateHistoricoDireccionGrupoDto extends PartialType(CreateHistoricoDireccionGrupoDto) {}
