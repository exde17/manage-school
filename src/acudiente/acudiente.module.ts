import { Module } from '@nestjs/common';
import { AcudienteService } from './acudiente.service';
import { AcudienteController } from './acudiente.controller';

@Module({
  controllers: [AcudienteController],
  providers: [AcudienteService]
})
export class AcudienteModule {}
