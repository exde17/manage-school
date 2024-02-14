import { Module } from '@nestjs/common';
import { AcudienteService } from './acudiente.service';
import { AcudienteController } from './acudiente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acudiente } from './entities/acudiente.entity';

@Module({
  controllers: [AcudienteController],
  providers: [AcudienteService],
  imports: [TypeOrmModule.forFeature([Acudiente])],
})
export class AcudienteModule {}
