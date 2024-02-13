import { Module } from '@nestjs/common';
import { CategoriaFuncionarioService } from './categoria_funcionario.service';
import { CategoriaFuncionarioController } from './categoria_funcionario.controller';

@Module({
  controllers: [CategoriaFuncionarioController],
  providers: [CategoriaFuncionarioService]
})
export class CategoriaFuncionarioModule {}
