import { PartialType } from '@nestjs/swagger';
import { CreateTipoEmpresaDto } from './create-tipo_empresa.dto';

export class UpdateTipoEmpresaDto extends PartialType(CreateTipoEmpresaDto) {}
