import { Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad) private readonly ciudadRepository: Repository<Ciudad>
  ){}
  async create(createCiudadDto: CreateCiudadDto) {
    try {
      const ciudad = this.ciudadRepository.create(createCiudadDto);

      const result = await this.ciudadRepository.save(ciudad);

      return {
        message: 'Ciudad creada exitosamente',
        ciudad: result
      }
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al crear la ciudad',
        error: error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.ciudadRepository.find();
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al obtener las ciudades',
        error: error
      
      }
    }
  }

  findOne(id: string) {
    try {
      const result = this.ciudadRepository.findOne({
        where: {
          id
        }});
        if(!result) return {
          message: 'No se encontro la ciudad'
        }
        return result;
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al obtener la ciudad',
        error: error
      }
    }
  }

  update(id: string, updateCiudadDto: UpdateCiudadDto) {
    try {
      const result = this.ciudadRepository.findOne({
        where: {
          id
        }
      });
      if(!result) return {
        message: 'No se encontro la ciudad'
      }
      this.ciudadRepository.update(id, updateCiudadDto);
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al actualizar la ciudad',
        error: error
      }
      
    }
  }

  remove(id: string) {
    try {
      const ciudad = this.ciudadRepository.delete(id);
      if(!ciudad) return {
        message: 'No se encontro la ciudad'
      }
      return {
        message: 'Ciudad eliminada exitosamente'
      }
    } catch (error) {
      console.log(error);
      return {
        message: 'Error al eliminar la ciudad',
        error: error
      }
      
    }
  }
}
