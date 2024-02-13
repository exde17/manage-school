import { Module } from '@nestjs/common';
import { BarrioService } from './barrio.service';
import { BarrioController } from './barrio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barrio } from './entities/barrio.entity';

@Module({
  controllers: [BarrioController],
  providers: [BarrioService],
  imports:[TypeOrmModule.forFeature([Barrio])]
})
export class BarrioModule {}
