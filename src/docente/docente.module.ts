import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService],
  imports: [TypeOrmModule.forFeature([Docente]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class DocenteModule {}
