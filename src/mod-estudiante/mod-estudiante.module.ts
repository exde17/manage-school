import { Module } from '@nestjs/common';
import { ModEstudianteService } from './mod-estudiante.service';
import { ModEstudianteController } from './mod-estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModEstudiante } from './entities/mod-estudiante.entity';
import { User } from 'src/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';


@Module({
  controllers: [ModEstudianteController],
  providers: [ModEstudianteService],
  imports: [
    TypeOrmModule.forFeature([ModEstudiante,User]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
})
export class ModEstudianteModule {}
