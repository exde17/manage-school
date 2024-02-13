import { Module } from '@nestjs/common';
import { TipoEmpresaService } from './tipo_empresa.service';
import { TipoEmpresaController } from './tipo_empresa.controller';

@Module({
  controllers: [TipoEmpresaController],
  providers: [TipoEmpresaService]
})
export class TipoEmpresaModule {}
