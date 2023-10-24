import { Module } from '@nestjs/common';
import { ModEstudianteService } from './mod-estudiante.service';
import { ModEstudianteController } from './mod-estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModEstudiante } from './entities/mod-estudiante.entity';

@Module({
  controllers: [ModEstudianteController],
  providers: [ModEstudianteService],
  imports: [
    TypeOrmModule.forFeature([ModEstudiante]),
  ],
})
export class ModEstudianteModule {}
