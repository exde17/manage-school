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

  findOne(id: string) {
    return `This action returns a #${id} departamento`;
  }

  update(id: string, updateDepartamentoDto: UpdateDepartamentoDto) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: string) {
    return `This action removes a #${id} departamento`;
  }
}
