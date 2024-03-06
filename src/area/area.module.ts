import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [TypeOrmModule.forFeature([Area]),
  PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AreaModule {}
