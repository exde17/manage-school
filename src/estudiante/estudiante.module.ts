import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([Estudiante]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class EstudianteModule {}
