import { PartialType } from '@nestjs/swagger';
import { CreateDireccionGrupoDto } from './create-direccion_grupo.dto';

export class UpdateDireccionGrupoDto extends PartialType(CreateDireccionGrupoDto) {}
