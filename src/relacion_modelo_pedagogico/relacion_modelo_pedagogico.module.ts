import { Module } from '@nestjs/common';
import { RelacionModeloPedagogicoService } from './relacion_modelo_pedagogico.service';
import { RelacionModeloPedagogicoController } from './relacion_modelo_pedagogico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelacionModeloPedagogico } from './entities/relacion_modelo_pedagogico.entity';

@Module({
  controllers: [RelacionModeloPedagogicoController],
  providers: [RelacionModeloPedagogicoService],
  imports: [TypeOrmModule.forFeature([RelacionModeloPedagogico])],
})
export class RelacionModeloPedagogicoModule {}
