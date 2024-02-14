import { Module } from '@nestjs/common';
import { JornadaService } from './jornada.service';
import { JornadaController } from './jornada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jornada } from './entities/jornada.entity';

@Module({
  controllers: [JornadaController],
  providers: [JornadaService],
  imports: [TypeOrmModule.forFeature([Jornada])],
})
export class JornadaModule {}
