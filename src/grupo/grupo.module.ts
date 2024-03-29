import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Horario } from 'src/horario/entities/horario.entity';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService],
  imports: [TypeOrmModule.forFeature([Grupo,]),
  PassportModule.register({ defaultStrategy: 'jwt' })
],
})
export class GrupoModule {}
