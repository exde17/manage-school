import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}
  async create(createDocenteDto: CreateDocenteDto) {
    try {
      const docente = this.docenteRepository.create(createDocenteDto);
      await this.docenteRepository.save(docente);
      return{
        message: 'Docente creado correctamente',
        docente
      }
    } catch (error) {
      return{
        message: 'Error al crear el docente',
        error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.docenteRepository.find();
    } catch (error) {
      return{
        message: 'Error al obtener los docentes',
        error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.docenteRepository.findOne({
        where: {id}
      });
    } catch (error) {
      return{
        message: 'Error al obtener el docente',
        error
      }
      
    };
  }

  async update(id: string, updateDocenteDto: UpdateDocenteDto) {
    try {
      const docente = await this.docenteRepository.findOne({
        where: {id}
      })
      if(docente){
        await this.docenteRepository.update(id,updateDocenteDto);
        return{
          message: 'Docente actualizado correctamente',
          docente
        }
      }
    } catch (error) {
      return{
        message: 'Error al actualizar el docente',
        error
      }
      
    }
  }

  async remove(id: string) {
    try {
      return await this.docenteRepository.delete(id);
    } catch (error) {
      return{
        message: 'Error al eliminar el docente',
        error
      }
      
    }
    
  }
}
