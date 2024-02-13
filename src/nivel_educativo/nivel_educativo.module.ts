import { Module } from '@nestjs/common';
import { NivelEducativoService } from './nivel_educativo.service';
import { NivelEducativoController } from './nivel_educativo.controller';

@Module({
  controllers: [NivelEducativoController],
  providers: [NivelEducativoService]
})
export class NivelEducativoModule {}
