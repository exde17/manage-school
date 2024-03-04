import { Injectable } from '@nestjs/common';
import { CreateVeredaDto } from './dto/create-vereda.dto';
import { UpdateVeredaDto } from './dto/update-vereda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vereda } from './entities/vereda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VeredaService {
  constructor(
    @InjectRepository(Vereda)
    private readonly veredaRepository: Repository<Vereda>,
  ) {}
  async create(createVeredaDto: CreateVeredaDto) {
    try {
      const vereda = this.veredaRepository.create(createVeredaDto);
      const result = await this.veredaRepository.save(vereda);
      return {
        message: 'Vereda creada correctamente',
        vereda: result,
      }
    } catch (error) {
      return {
        message: 'Error al crear la vereda',
        error: error.message,
      }
      
    }
  }

  async findAll() {
    try {
      return await this.veredaRepository.find();
    } catch (error) {
      return {
        message: 'Error al obtener las veredas',
        error: error.message,
      }
    }
  }

  async findOne(id: string) {
    try {
      return await this.veredaRepository.findOne({
        where: { id },
      });
    } catch (error) {
      return {
        message: 'Error al obtener la vereda',
        error: error.message,
      }
      
    }
  }

  async update(id: string, updateVeredaDto: UpdateVeredaDto) {
    try {
      const vereda = await this.veredaRepository.findOne({
        where: { id },
      });

      if (!vereda) {
        return {
          message: 'Vereda no encontrada',
        }
      }

      const editedVereda = this.veredaRepository.merge(vereda, updateVeredaDto);
      const result = await this.veredaRepository.save(editedVereda);
      return {
        message: 'Vereda actualizada correctamente',
        vereda: result,
      }
    } catch (error) {
      return {
        message: 'Error al actualizar la vereda',
        error: error.message,
      }
      
    }
  }

  async remove(id: string) {
    try {
      const vereda = await this.veredaRepository.delete(id);
      return{
        message: 'Vereda eliminada correctamente',
        vereda: vereda,
      }
    } catch (error) {
      return {
        message: 'Error al eliminar la vereda',
        error: error.message,
      }
      
    }
  }
}
