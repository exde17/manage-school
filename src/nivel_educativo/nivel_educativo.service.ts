import { Injectable } from '@nestjs/common';
import { CreateNivelEducativoDto } from './dto/create-nivel_educativo.dto';
import { UpdateNivelEducativoDto } from './dto/update-nivel_educativo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NivelEducativo } from './entities/nivel_educativo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NivelEducativoService {
  constructor(
    @InjectRepository(NivelEducativo)
    private nivelEducativoRepository: Repository<NivelEducativo>
  ) {}
  async create(createNivelEducativoDto: CreateNivelEducativoDto) {
    try {
      const nivelEducativo = this.nivelEducativoRepository.create(createNivelEducativoDto);
      await this.nivelEducativoRepository.save(nivelEducativo);

      return {
        message: 'Nivel educativo creado con exito',
        data: nivelEducativo
      }

    } catch (error) {
      return {
        message: 'Error al crear nivel educativo',
        data: error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.nivelEducativoRepository.find();
    } catch (error) {
      return {
        message: 'Error al obtener niveles educativos',
        data: error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.nivelEducativoRepository.findOne({
        where: {
          id
        }
      });
    } catch (error) {
      return {
        message: 'Error al obtener nivel educativo',
        data: error
      }
      
    }
  }

  async update(id: string, updateNivelEducativoDto: UpdateNivelEducativoDto) {
    try {
      const nivelEducativo = await this.nivelEducativoRepository.findOne({
        where: {
          id
        }
      });

      if (nivelEducativo) {
        this.nivelEducativoRepository.merge(nivelEducativo, updateNivelEducativoDto);
        return await this.nivelEducativoRepository.save(nivelEducativo);
      }
      else {
        return {
          message: 'Nivel educativo no encontrado',
          data: null
        }
      }
    } catch (error) {
      return {
        message: 'Error al actualizar nivel educativo',
        data: error
      }
      
    }
  }

  async remove(id: string) {
    try {
      await this.nivelEducativoRepository.delete(id);
      return {
        message: 'Nivel educativo eliminado con exito',
        data: null
      }
    } catch (error) {
      return {
        message: 'Error al eliminar nivel educativo',
        data: error
      }
      
    }
  }
}
