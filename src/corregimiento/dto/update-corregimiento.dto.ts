import { PartialType } from '@nestjs/swagger';
import { CreateCorregimientoDto } from './create-corregimiento.dto';

export class UpdateCorregimientoDto extends PartialType(CreateCorregimientoDto) {}
