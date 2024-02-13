import { PartialType } from '@nestjs/swagger';
import { CreateNivelEducativoDto } from './create-nivel_educativo.dto';

export class UpdateNivelEducativoDto extends PartialType(CreateNivelEducativoDto) {}
