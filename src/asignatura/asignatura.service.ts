import { Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsignaturaService {
  constructor(
    @InjectRepository(Asignatura)
    private readonly asignaturaRepository: Repository<Asignatura>,
  ) {}
  async create(createAsignaturaDto: CreateAsignaturaDto) {
    try {
      const asignatura = this.asignaturaRepository.create(createAsignaturaDto);
      const result = await this.asignaturaRepository.save(asignatura);
      return {
        success: 'asignatura creada con exito',
        data: result,
      }
    } catch (error) {
      return {
        error: 'Error al crear la asignatura',
        message: error.message,
      }
      
    }
  }

  async findAll() {
    try {
      return await this.asignaturaRepository.find();
    } catch (error) {
      return {
        error: 'Error al buscar las asignaturas',
        message: error.message,
      }
      
    }
  }

  async findOne(id: string) {
    try {
      const asignatura = await this.asignaturaRepository.findOne({
        where: { id }
      });
      if (!asignatura) {
        return {
          error: 'No se encontro la asignatura',
        }
      }
      return{
        success: 'Asignatura encontrada',
        data: asignatura,
      }
    } catch (error) {
      return {
        error: 'Error al buscar la asignatura',
        message: error.message,
      }
      
    }
  }

  async update(id: string, updateAsignaturaDto: UpdateAsignaturaDto) {
    try {
      const asignatura = await this.asignaturaRepository.preload({
        id: id,
        ...updateAsignaturaDto
      });
      if (!asignatura) {
        return {
          error: 'No se encontro la asignatura',
        }
      }
     const result =await this.asignaturaRepository.save(asignatura);
     return {
        success: 'Asignatura actualizada con exito',
        data: result,
      
     }
    } catch (error) {
      return {
        error: 'Error al actualizar la asignatura',
        message: error.message,
      }
      
    }
  }

  async remove(id: string) {
    try {
      const asignatura = await this.asignaturaRepository.findOne({
        where: { id }
      });
      if (!asignatura) {
        return {
          error: 'No se encontro la asignatura',
        }
      }
      const result =await this.asignaturaRepository.delete(asignatura);
      return {
        success: 'Asignatura eliminada con exito',
        data: result,
      }
    } catch (error) {
      return {
        error: 'Error al eliminar la asignatura',
        message: error.message,
      }
      
    }
  }
}
