import { Module } from '@nestjs/common';
import { VeredaService } from './vereda.service';
import { VeredaController } from './vereda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vereda } from './entities/vereda.entity';

@Module({
  controllers: [VeredaController],
  providers: [VeredaService],
  imports: [TypeOrmModule.forFeature([Vereda])],
})
export class VeredaModule {}
