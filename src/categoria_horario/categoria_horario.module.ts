import { Module } from '@nestjs/common';
import { CategoriaHorarioService } from './categoria_horario.service';
import { CategoriaHorarioController } from './categoria_horario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaHorario } from './entities/categoria_horario.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [CategoriaHorarioController],
  providers: [CategoriaHorarioService],
  imports: [TypeOrmModule.forFeature([CategoriaHorario]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class CategoriaHorarioModule {}
