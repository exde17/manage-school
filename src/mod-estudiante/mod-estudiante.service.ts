import { Injectable } from '@nestjs/common';
import { CreateModEstudianteDto } from './dto/create-mod-estudiante.dto';
import { UpdateModEstudianteDto } from './dto/update-mod-estudiante.dto';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { ModEstudiante } from './entities/mod-estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModEstudianteService {
  constructor(
    @InjectRepository(ModEstudiante) private readonly modEstudianteRepository: Repository<ModEstudiante>,
  ){}

  async create(createModEstudianteDto: CreateModEstudianteDto) {
    try {
      const estudiante = await this.modEstudianteRepository.create(createModEstudianteDto);

      await this.modEstudianteRepository.save(estudiante);

      return {
        response: true,
        data: 'estudiante creado con exito'
      }
    } catch (error) {
      console.log(error)
      return {
        response: false,
        data: error
      }
      
    }
  }

  findAll() {
    return "veras"
  }

  findOne(id: number) {
    return `This action returns a #${id} modEstudiante`;
  }

  update(id: number, updateModEstudianteDto: UpdateModEstudianteDto) {
    return `This action updates a #${id} modEstudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} modEstudiante`;
  }
}
