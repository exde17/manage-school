import { Injectable } from '@nestjs/common';
import { CreateCorregimientoDto } from './dto/create-corregimiento.dto';
import { UpdateCorregimientoDto } from './dto/update-corregimiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Corregimiento } from './entities/corregimiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CorregimientoService {
  constructor(
    @InjectRepository(Corregimiento)
    private corregimientoRepository: Repository<Corregimiento>,
  ) {}
 async create(createCorregimientoDto: CreateCorregimientoDto) {
    try {
      const corregimiento = this.corregimientoRepository.create(createCorregimientoDto);
      await this.corregimientoRepository.save(corregimiento);
      return{
        message: 'corregimiento created successfully'
      }
    } catch (error) {
      return{
        message: 'error creating corregimiento'
      } 
    }
  }

  findAll() {
    try {
      return this.corregimientoRepository.find({
        relations: ['ciudad']
      });
    } catch (error) {
      return{
        message: 'error getting corregimientos'
      }
    }
  }

  findOne(id: string) {
    try {
      return this.corregimientoRepository.findOne({
        relations: ['ciudad'],
        where: {
          id
        }
      });
    } catch (error) {
      return{
        message: 'error getting corregimiento'
      }
    }
  }

  async update(id: string, updateCorregimientoDto: UpdateCorregimientoDto) {
    try {
      const corregimiento = await this.corregimientoRepository.findOne({
        where: {
          id
        }
      });

      this.corregimientoRepository.update(id, updateCorregimientoDto);
      return{
        message: 'corregimiento updated successfully'
      }

    } catch (error) {
      return{
        message: 'error updating corregimiento'
      }
      
    }
  }

  remove(id: string) {
    try {
      this.corregimientoRepository.delete(id);
      return{
        message: 'corregimiento deleted successfully'
      }
    } catch (error) {
      return{
        message: 'error deleting corregimiento'
      }
    }
  }
}
