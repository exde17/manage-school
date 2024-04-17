import { Injectable } from '@nestjs/common';
import { CreateCategoriaFuncionarioDto } from './dto/create-categoria_funcionario.dto';
import { UpdateCategoriaFuncionarioDto } from './dto/update-categoria_funcionario.dto';
import { Docente } from 'src/docente/entities/docente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaFuncionario } from './entities/categoria_funcionario.entity';

@Injectable()
export class CategoriaFuncionarioService {
  constructor(
    @InjectRepository(CategoriaFuncionario)
    private readonly docenteRepository: Repository<CategoriaFuncionario>,
  ) {}
  async create(createCategoriaFuncionarioDto: CreateCategoriaFuncionarioDto) {
    try {
      const docente = this.docenteRepository.create(createCategoriaFuncionarioDto);
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
      
    }
  }

  async update(id: string, updateCategoriaFuncionarioDto: UpdateCategoriaFuncionarioDto) {
    try {
      const docente = await this.docenteRepository.preload({
        id: id,
        ...updateCategoriaFuncionarioDto
      });
      await this.docenteRepository.save(docente);
      return {
        message: 'Docente actualizado correctamente',
        docente
      
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
