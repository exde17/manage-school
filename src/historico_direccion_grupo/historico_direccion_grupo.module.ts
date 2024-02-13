import { Module } from '@nestjs/common';
import { HistoricoDireccionGrupoService } from './historico_direccion_grupo.service';
import { HistoricoDireccionGrupoController } from './historico_direccion_grupo.controller';

@Module({
  controllers: [HistoricoDireccionGrupoController],
  providers: [HistoricoDireccionGrupoService]
})
export class HistoricoDireccionGrupoModule {}
