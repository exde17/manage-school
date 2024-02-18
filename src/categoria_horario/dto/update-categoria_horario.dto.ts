import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaHorarioDto } from './create-categoria_horario.dto';

export class UpdateCategoriaHorarioDto extends PartialType(CreateCategoriaHorarioDto) {}
