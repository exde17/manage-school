import { Module } from '@nestjs/common';
import { ComunaService } from './comuna.service';
import { ComunaController } from './comuna.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comuna } from './entities/comuna.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [ComunaController],
  providers: [ComunaService],
  imports: [TypeOrmModule.forFeature([Comuna]),
  PassportModule.register({ defaultStrategy: 'jwt' })
],
})
export class ComunaModule {}
