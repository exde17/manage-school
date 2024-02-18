import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './entities/departamento.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
  imports: [TypeOrmModule.forFeature([Departamento]),
  PassportModule.register({ defaultStrategy: 'jwt' })
],
})
export class DepartamentoModule {}
