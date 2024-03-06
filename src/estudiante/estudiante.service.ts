import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}
  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepository.create(createEstudianteDto);
      await this.estudianteRepository.save(estudiante);
      return{
        message: 'Estudiante creado correctamente',
        estudiante
      }
    } catch (error) {
      return{
        message: 'Error al crear el estudiante',
        error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.estudianteRepository.find();
    } catch (error) {
      return{
        message: 'Error al obtener los estudiantes',
        error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.estudianteRepository.findOne({
        where: {id}
      });
    } catch (error) {
      return{
        message: 'Error al obtener el estudiante',
        error
      }
      
    }
  }

  async update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
    try {
      const estudiante = await this.estudianteRepository.findOne({
        where: {id}
      });

      if(estudiante){
        await this.estudianteRepository.update(id, updateEstudianteDto);
        return{
          message: 'Estudiante actualizado correctamente',
          estudiante
        }
      }
    } catch (error) {
      return{
        message: 'Error al actualizar el estudiante',
        error
      }
      
    }
  }

  async remove(id: string) {
    try {
      return await this.estudianteRepository.delete(id);
    } catch (error) {
      return{
        message: 'Error al eliminar el estudiante',
        error
      }
      
    }
  }
}
