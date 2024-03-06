import { Module } from '@nestjs/common';
import { AcudienteService } from './acudiente.service';
import { AcudienteController } from './acudiente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acudiente } from './entities/acudiente.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AcudienteController],
  providers: [AcudienteService],
  imports: [TypeOrmModule.forFeature([Acudiente]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AcudienteModule {}
