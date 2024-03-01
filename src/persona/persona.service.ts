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

  async findAll() {
    try {
      return await this.personaRepository.find();
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al obtener personas',
        error,
      }
      
    }
  }

  async findOne(id: string) {
    return await this.personaRepository.findOne({
      where: {
        id,
      }
    });
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    try {
      const persona = await this.personaRepository.findOne({
        where: {
          id,
        }
      });

      if (!persona) {
        return {
          message: 'Persona no encontrada',
        }
      }

      await this.personaRepository.update(id, updatePersonaDto);
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al actualizar persona',
        error,
      }
      
    }
  }

  remove(id: string) {
    try {
      return this.personaRepository.delete(id);
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al eliminar persona',
        error,
      }
    }
  }
}
