import { Injectable } from '@nestjs/common';
import { CreateAcudienteDto } from './dto/create-acudiente.dto';
import { UpdateAcudienteDto } from './dto/update-acudiente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acudiente } from './entities/acudiente.entity';

@Injectable()
export class AcudienteService { 
  constructor(
    @InjectRepository(Acudiente)
    private readonly acudienteRepository: Repository<Acudiente>
  ) {}
  async create(createAcudienteDto: CreateAcudienteDto) {
    try {
      const acudiente = this.acudienteRepository.create(createAcudienteDto);
      const result = await this.acudienteRepository.save(acudiente);
      return {
        message: 'Acudiente creado correctamente',
        result
      }
    } catch (error) {
      return {
        message: 'Error al crear el acudiente',
        error: error.message
      }
      
    }
  }

  async findAll() {
    try {
      return await this.acudienteRepository.find();
    } catch (error) {
      return {
        message: 'Error al obtener los acudientes',
        error: error.message
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.acudienteRepository.findOne(
        { where: { id } }
      );
    } catch (error) {
      return {
        message: 'Error al obtener el acudiente',
        error: error.message
      }
      
    }
  }

  async update(id: string, updateAcudienteDto: UpdateAcudienteDto) {
    try {
      const acudiente = await this.acudienteRepository.preload({
        id: id,
        ...updateAcudienteDto
      });
      if (!acudiente) {
        return {
          message: 'Error al actualizar el acudiente',
          error: 'Acudiente no encontrado'
        }
      }
      const result= await this.acudienteRepository.save(acudiente);
      return {
        message: 'Acudiente actualizado correctamente',
        result
      }
    } catch (error) {
      return {
        message: 'Error al actualizar el acudiente',
        error: error.message
      }
      
    }
  }

  async remove(id: string) {
    try {
      const result = await this.acudienteRepository.delete({ id });
      if (result.affected === 0) {
        return {
          message: 'Error al eliminar el acudiente',
          error: 'Acudiente no encontrado'
        }
      }
      return {
        message: 'Acudiente eliminado correctamente'
      }
    } catch (error) {
      return {
        message: 'Error al eliminar el acudiente',
        error: error.message
      }
      
    }
  }
}
