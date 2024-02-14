import { Module } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioController } from './horario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';

@Module({
  controllers: [HorarioController],
  providers: [HorarioService],
  imports: [TypeOrmModule.forFeature([Horario])],
})
export class HorarioModule {}
