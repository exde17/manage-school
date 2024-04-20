import { Injectable } from '@nestjs/common';
import { CreateComunaDto } from './dto/create-comuna.dto';
import { UpdateComunaDto } from './dto/update-comuna.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comuna } from './entities/comuna.entity';

@Injectable()
export class ComunaService {
  constructor(
    @InjectRepository(Comuna)
    private comunaRepository: Repository<Comuna>,
  ) {}
  async create(createComunaDto: CreateComunaDto) {
    try {
      const comuna = this.comunaRepository.create(createComunaDto);

      const comunaSaved = await this.comunaRepository.save(comuna);
      return {
        message: 'Comuna creada',
        comuna: comunaSaved,
      };
      
    } catch (error) {
      return {
        message: 'Error al crear comuna',
        error,
      };
      
    }
  }

  async findAll() {
    try {
      return this.comunaRepository.find({
        relations: ['ciudad']
      });
    } catch (error) {
      return {
        message: 'Error al obtener comunas',
        error,
      };
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.comunaRepository.findOne({
        relations: ['ciudad'],
        where: { id },
      });
    } catch (error) {
      return {
        message: 'Error al obtener comuna',
        error,
      };
      
    }
    
  }

  async update(id: string, updateComunaDto: UpdateComunaDto) {
    try {
      const comuna = await this.comunaRepository.findOne({
        where: { id },
      }); 
      if (comuna) {
        this.comunaRepository.merge(comuna, updateComunaDto);
        const comunaUpdated = await this.comunaRepository.save(comuna);
        return {
          message: 'Comuna actualizada',
          comuna: comunaUpdated,
        };
      }
    } catch (error) {
      return {
        message: 'Error al actualizar comuna',
        error,
      };
      
    }
  }

  async remove(id: string) {
    try {
      return await this.comunaRepository.delete(id);
    } catch (error) {
      return {
        message: 'Error al eliminar comuna',
        error,
      };
      
    }
  }
}
