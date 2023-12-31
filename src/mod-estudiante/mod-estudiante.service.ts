import { Injectable } from '@nestjs/common';
import { CreateModEstudianteDto } from './dto/create-mod-estudiante.dto';
import { UpdateModEstudianteDto } from './dto/update-mod-estudiante.dto';
import axios from 'axios';

@Injectable()
export class ModEstudianteService {
  create(createModEstudianteDto: CreateModEstudianteDto) {
    return 'This action adds a new modEstudiante';
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
