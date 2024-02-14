import { Module } from '@nestjs/common';
import { CategoriaFuncionarioService } from './categoria_funcionario.service';
import { CategoriaFuncionarioController } from './categoria_funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaFuncionario } from './entities/categoria_funcionario.entity';

@Module({
  controllers: [CategoriaFuncionarioController],
  providers: [CategoriaFuncionarioService],
  imports: [TypeOrmModule.forFeature([CategoriaFuncionario])],
})
export class CategoriaFuncionarioModule {}
