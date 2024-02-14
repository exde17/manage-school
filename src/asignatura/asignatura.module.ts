import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';

@Module({
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  imports: [TypeOrmModule.forFeature([Asignatura])],
})
export class AsignaturaModule {}
