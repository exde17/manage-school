import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [TypeOrmModule.forFeature([Area])],
})
export class AreaModule {}
