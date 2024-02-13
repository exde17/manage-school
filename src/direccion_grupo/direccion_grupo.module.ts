import { Module } from '@nestjs/common';
import { DireccionGrupoService } from './direccion_grupo.service';
import { DireccionGrupoController } from './direccion_grupo.controller';

@Module({
  controllers: [DireccionGrupoController],
  providers: [DireccionGrupoService]
})
export class DireccionGrupoModule {}
