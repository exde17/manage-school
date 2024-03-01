import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()


export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento) private departamentoRepository: Repository<Departamento>,
    ) {}
  async create(createDepartamentoDto: CreateDepartamentoDto) {
    try {
      const departamento = this.departamentoRepository.create(createDepartamentoDto);

      await this.departamentoRepository.save(departamento);
      return {
        message: 'Departamento creado con exito',
        data: departamento
      }
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al crear el departamento',
        error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.departamentoRepository.find();

    } catch (error) {
      console.log(error);
      return {
        message: 'Error al obtener los departamentos',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      return await this.departamentoRepository.findOne({
        where: {
          id,
        }
      });
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al obtener el departamento',
        error
      }
    }
  }

  async update(id: string, updateDepartamentoDto: UpdateDepartamentoDto) {
    try {
      const departamento = await this.departamentoRepository.findOne({
        where: {
          id,
        }
      });

      if(!departamento) return {
        message: 'Departamento no encontrado',
      }

      this.departamentoRepository.merge(departamento, updateDepartamentoDto);
    } catch (error) {
      
    }
  }

  remove(id: string) {
    try {
      const departamento = this.departamentoRepository.delete(id);
      return {
        message: 'Departamento eliminado con exito',
        data: departamento
      }
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al eliminar el departamento',
        error
      }
      
    }
  }
}
