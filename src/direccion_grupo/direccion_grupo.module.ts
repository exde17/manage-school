import { Module } from '@nestjs/common';
import { DireccionGrupoService } from './direccion_grupo.service';
import { DireccionGrupoController } from './direccion_grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionGrupo } from './entities/direccion_grupo.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [DireccionGrupoController],
  providers: [DireccionGrupoService],
  imports: [TypeOrmModule.forFeature([DireccionGrupo]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class DireccionGrupoModule {}
