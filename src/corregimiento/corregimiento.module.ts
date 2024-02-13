import { Module } from '@nestjs/common';
import { CorregimientoService } from './corregimiento.service';
import { CorregimientoController } from './corregimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corregimiento } from './entities/corregimiento.entity';

@Module({
  controllers: [CorregimientoController],
  providers: [CorregimientoService],
  imports: [TypeOrmModule.forFeature([Corregimiento])],
})
export class CorregimientoModule {}
