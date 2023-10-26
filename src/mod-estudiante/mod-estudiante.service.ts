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
    const API_URL =
      'https://school-dev-6d242b4deb31.herokuapp.com/api/auth/login';

    const Conex = {
      login: (email, password) => {
        return axios
          .post(API_URL, {
            email: 'garcia@gmail.com',
            password: 'Ronald2023',
          })
          .then((response) => {
            // Respuesta del servidor
            console.log('Usuario Conectado');
            return response.data;
          })
          .catch((error) => {
            console.error('Error en la solicitud:', error);
            throw new Error('No se pudo conectar al servidor');
          });
      },
    };

    return Conex;
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
