import { Module } from '@nestjs/common';
import { ModeloPedagogicoService } from './modelo_pedagogico.service';
import { ModeloPedagogicoController } from './modelo_pedagogico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloPedagogico } from './entities/modelo_pedagogico.entity';

@Module({
  controllers: [ModeloPedagogicoController],
  providers: [ModeloPedagogicoService],
  imports: [TypeOrmModule.forFeature([ModeloPedagogico])],
})
export class ModeloPedagogicoModule {}
