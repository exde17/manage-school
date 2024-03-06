import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  imports: [TypeOrmModule.forFeature([Asignatura]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AsignaturaModule {}
