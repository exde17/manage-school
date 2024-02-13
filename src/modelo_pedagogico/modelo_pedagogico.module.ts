import { Module } from '@nestjs/common';
import { ModeloPedagogicoService } from './modelo_pedagogico.service';
import { ModeloPedagogicoController } from './modelo_pedagogico.controller';

@Module({
  controllers: [ModeloPedagogicoController],
  providers: [ModeloPedagogicoService]
})
export class ModeloPedagogicoModule {}
