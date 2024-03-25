import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
import { Docente } from 'src/docente/entities/docente.entity';
import { Acudiente } from 'src/acudiente/entities/acudiente.entity';
//requiero el uuid para parsera un dato
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
    @InjectRepository(Acudiente)
    private readonly acudienteRepository: Repository<Acudiente>,
  ) {}
  async create(createEstudianteDto: CreateEstudianteDto) {
    const {persona, acudiente, grupo} = createEstudianteDto;
    try {
      const docente = await this.docenteRepository.findOne({
        where: {persona}
      });
      const cudiente = await this.acudienteRepository.findOne({
        //parseo el acudiente a uuid
        where: {persona: uuidv4(acudiente)}
      });

      if(docente || cudiente){
        return {
          message: 'un docente o acudiente no pueden ser estudiantes'
        }
      }
      console.log(createEstudianteDto);
      const estudiante = this.estudianteRepository.create(createEstudianteDto);
      await this.estudianteRepository.save(estudiante);
      return{
        message: 'Estudiante creado correctamente',
        estudiante
      }
    } catch (error) {
      return{
        message: 'Error al crear el estudiante',
        error
      }
      
    }
  }

  async findAll() {
    try {
      const estudiantes = await this.estudianteRepository.find(
        {relations: ['persona', 'grupo', 'acudiente.persona']}
      );
const obj = estudiantes.map((estudiante) => ({
  id: estudiante.id,
  persona: estudiante.persona.nombre+' '+estudiante.persona.apellido,
  grupo: estudiante.grupo.nombre,
  acudiente: estudiante.acudiente.persona.nombre+' '+estudiante.acudiente.persona.apellido 
}));

return obj;
      
    } catch (error) {
      console.log(error);
      return{
        message: 'Error al obtener los estudiantes',
        error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.estudianteRepository.findOne({
        where: {id}
      });
    } catch (error) {
      return{
        message: 'Error al obtener el estudiante',
        error
      }
      
    }
  }

  async update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
    try {
      const estudiante = await this.estudianteRepository.findOne({
        where: {id}
      });

      if(estudiante){
        await this.estudianteRepository.update(id, updateEstudianteDto);
        return{
          message: 'Estudiante actualizado correctamente',
          estudiante
        }
      }
    } catch (error) {
      return{
        message: 'Error al actualizar el estudiante',
        error
      }
      
    }
  }

  async remove(id: string) {
    try {
      return await this.estudianteRepository.delete(id);
    } catch (error) {
      return{
        message: 'Error al eliminar el estudiante',
        error
      }
      
    }
  }
}
