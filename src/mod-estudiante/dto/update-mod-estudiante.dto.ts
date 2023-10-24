import { PartialType } from '@nestjs/mapped-types';
import { CreateModEstudianteDto } from './create-mod-estudiante.dto';

export class UpdateModEstudianteDto extends PartialType(CreateModEstudianteDto) {}
