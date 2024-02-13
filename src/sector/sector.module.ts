import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './entities/sector.entity';

@Module({
  controllers: [SectorController],
  providers: [SectorService],
  imports: [TypeOrmModule.forFeature([Sector])],

})
export class SectorModule {}
