import { Module } from '@nestjs/common';
import { TipoSectorService } from './tipo_sector.service';
import { TipoSectorController } from './tipo_sector.controller';

@Module({
  controllers: [TipoSectorController],
  providers: [TipoSectorService]
})
export class TipoSectorModule {}
