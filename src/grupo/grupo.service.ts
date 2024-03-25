import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,
  ) {}
  async create(createGrupoDto: CreateGrupoDto) {
    try {
      const grupo = this.grupoRepository.create(createGrupoDto);
      await this.grupoRepository.save(grupo);
      return {
        message: 'Grupo creado correctamente',
        grupo
      }
    } catch (error) {
      return {
        message: 'Error en la creación del grupo',
        error
      
      }
    }
  }

  async findAll() {
    try {
      return await this.grupoRepository.find();
    } catch (error) {
      return {
        message: 'Error en la obtención de los grupos',
        error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      const grupo = await this.grupoRepository.findOne({
        where: {
          id
        }
      });
    } catch (error) {
      return {
        message: 'Error en la obtención del grupo',
        error
    }
  }}

  async update(id: string, updateGrupoDto: UpdateGrupoDto) {
    try {
      const grupo = await this.grupoRepository.findOne({
        where: {
          id
        }
      });

      this.grupoRepository.merge(grupo, updateGrupoDto);
      await this.grupoRepository.save(grupo);
      return {
        message: 'Grupo actualizado correctamente',
        grupo
      }
    } catch (error) {
      return {
        message: 'Error en la actualización del grupo',
        error
      }
      
    }
  }

  async remove(id: string) {
    try {
      await this.grupoRepository.delete(id);
      return {
        message: 'Grupo eliminado correctamente'
      }
    } catch (error) {
      return {
        message: 'Error en la eliminación del grupo',
        error
      }
      
    }
  }
}
