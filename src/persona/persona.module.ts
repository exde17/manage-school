import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { Persona } from './entities/persona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Auth } from 'src/user/decorator';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
  imports: [TypeOrmModule.forFeature([Persona]),
  PassportModule.register({ defaultStrategy: 'jwt' })
],
  
})
export class PersonaModule {}
