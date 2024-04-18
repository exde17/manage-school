import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';
import { Persona } from 'src/persona/entities/persona.entity';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}
  async create(createDocenteDto: CreateDocenteDto) {
    try {
      const docente = this.docenteRepository.create(createDocenteDto);
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
      const result= await this.docenteRepository.find(
        {relations: ['persona','persona.ciudad','persona.departamento']}
      );
      const obj = result.map((docente) => ({
        id: docente.id,
        idPersona: docente.persona.id,
        nombre: docente.persona.nombre+' '+docente.persona.apellido,
        fechaNacimiento: docente.persona.fechaNacimiento,
        tipoIdentificacion: docente.persona.tipoIdentificacion,
        identificacion: docente.persona.identificacion,
        genero: docente.persona.genero,
        email: docente.persona.email,
        telefono: docente.persona.telefono,
        ciudad: docente.persona.ciudad.nombre,
        departamento: docente.persona.departamento.nombre,
      }));
      return obj;
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
        relations: ['persona','persona.ciudad','persona.departamento','categoriaFuncionario'],
        where: {id}
      });
    } catch (error) {
      return{
        message: 'Error al obtener el docente',
        error
      }
      
    };
  }

  async update(id: string, updateDocenteDto: UpdateDocenteDto) {
    try {
      const docente = await this.docenteRepository.findOne({
        where: {id}
      })
      if(docente){
        await this.docenteRepository.update(id,updateDocenteDto);
        return{
          message: 'Docente actualizado correctamente',
          docente
        }
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
