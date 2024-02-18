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

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: UpdateCiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
