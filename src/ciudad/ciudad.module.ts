import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [CiudadController],
  providers: [CiudadService],
  imports: [TypeOrmModule.forFeature([Ciudad]),
  PassportModule.register({ defaultStrategy: 'jwt' })
],
})
export class CiudadModule {}
