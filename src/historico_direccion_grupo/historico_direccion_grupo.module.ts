import { Module } from '@nestjs/common';
import { HistoricoDireccionGrupoService } from './historico_direccion_grupo.service';
import { HistoricoDireccionGrupoController } from './historico_direccion_grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoDireccionGrupo } from './entities/historico_direccion_grupo.entity';

@Module({
  controllers: [HistoricoDireccionGrupoController],
  providers: [HistoricoDireccionGrupoService],
  imports: [TypeOrmModule.forFeature([HistoricoDireccionGrupo])],
})
export class HistoricoDireccionGrupoModule {}
