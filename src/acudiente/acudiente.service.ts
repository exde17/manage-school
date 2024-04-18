import { Injectable } from '@nestjs/common';
import { CreateAcudienteDto } from './dto/create-acudiente.dto';
import { UpdateAcudienteDto } from './dto/update-acudiente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acudiente } from './entities/acudiente.entity';

@Injectable()
export class AcudienteService { 
  constructor(
    @InjectRepository(Acudiente)
    private readonly acudienteRepository: Repository<Acudiente>
  ) {}
  async create(createAcudienteDto: CreateAcudienteDto) {
    try {
      const acudiente = this.acudienteRepository.create(createAcudienteDto);
      const result = await this.acudienteRepository.save(acudiente);
      return {
        message: 'Acudiente creado correctamente',
        result
      }
    } catch (error) {
      return {
        message: 'Error al crear el acudiente',
        error: error.message
      }
      
    }
  }

  async findAll() {
    try {
      const result= await this.acudienteRepository.find({
        relations: ['persona', 'persona.ciudad', 'persona.departamento']
      });
      const obj = result.map((acudiente) => ({
        id: acudiente.id,
        idPersona: acudiente.persona.id,
        nombre: acudiente.persona.nombre+' '+acudiente.persona.apellido,
        fechaNacimiento: acudiente.persona.fechaNacimiento,
        tipoIdentificacion: acudiente.persona.tipoIdentificacion,
        identificacion: acudiente.persona.identificacion,
        genero: acudiente.persona.genero,
        email: acudiente.persona.email,
        telefono: acudiente.persona.telefono,
        ciudad: acudiente.persona.ciudad.nombre,
        departamento: acudiente.persona.departamento.nombre,
      }));
      return obj;
    } catch (error) {
      return {
        message: 'Error al obtener los acudientes',
        error: error.message
      }
      
    }
  }

  async findOne(id: string) {
    try {
      const bac= await this.acudienteRepository.findOne(
        { relations: ['persona', 'persona.ciudad', 'persona.departamento'],where: { id } }
      );
      return bac;

      // const obj = {
      //   id: acudiente.id,
      //   idPersona: acudiente.persona.id,
      //   nombre: acudiente.persona.nombre+' '+acudiente.persona.apellido,
      //   fechaNacimiento: acudiente.persona.fechaNacimiento,
      //   tipoIdentificacion: acudiente.persona.tipoIdentificacion,
      //   identificacion: acudiente.persona.identificacion,
      //   genero: acudiente.persona.genero,
      //   email: acudiente.persona.email,
      //   telefono: acudiente.persona.telefono,
      //   ciudad: acudiente.persona.ciudad.nombre,
      //   departamento: acudiente.persona.departamento.nombre,
      // };
      // return obj;
    } catch (error) {
      return {
        message: 'Error al obtener el acudiente',
        error: error.message
      }
      
    }
  }

  async update(id: string, updateAcudienteDto: UpdateAcudienteDto) {
    try {
      const acudiente = await this.acudienteRepository.preload({
        id: id,
        ...updateAcudienteDto
      });
      if (!acudiente) {
        return {
          message: 'Error al actualizar el acudiente',
          error: 'Acudiente no encontrado'
        }
      }
      const result= await this.acudienteRepository.save(acudiente);
      return {
        message: 'Acudiente actualizado correctamente',
        result
      }
    } catch (error) {
      return {
        message: 'Error al actualizar el acudiente',
        error: error.message
      }
      
    }
  }

  async remove(id: string) {
    try {
      const result = await this.acudienteRepository.delete({ id });
      if (result.affected === 0) {
        return {
          message: 'Error al eliminar el acudiente',
          error: 'Acudiente no encontrado'
        }
      }
      return {
        message: 'Acudiente eliminado correctamente'
      }
    } catch (error) {
      return {
        message: 'Error al eliminar el acudiente',
        error: error.message
      }
      
    }
  }
}
