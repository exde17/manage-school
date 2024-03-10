import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { PassportModule } from '@nestjs/passport';
import { Grupo } from '../grupo/entities/grupo.entity';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([Estudiante, ]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class EstudianteModule {}
