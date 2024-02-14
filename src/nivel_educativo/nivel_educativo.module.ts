import { Module } from '@nestjs/common';
import { NivelEducativoService } from './nivel_educativo.service';
import { NivelEducativoController } from './nivel_educativo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelEducativo } from './entities/nivel_educativo.entity';

@Module({
  controllers: [NivelEducativoController],
  providers: [NivelEducativoService],
  imports: [TypeOrmModule.forFeature([NivelEducativo])],
})
export class NivelEducativoModule {}
