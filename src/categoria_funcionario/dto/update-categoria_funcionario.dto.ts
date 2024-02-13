import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaFuncionarioDto } from './create-categoria_funcionario.dto';

export class UpdateCategoriaFuncionarioDto extends PartialType(CreateCategoriaFuncionarioDto) {}
