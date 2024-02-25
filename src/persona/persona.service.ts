import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}
  async create(createPersonaDto: CreatePersonaDto) {
    try {
      const persona = this.personaRepository.create(createPersonaDto);

      await this.personaRepository.save(persona);
      return {
        message: 'Persona creada correctamente',
        persona,
      }
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al crear persona',
        error,
      }
    }
  }

  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
