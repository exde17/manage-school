import { Inject, Injectable } from '@nestjs/common';
import { CreateBarrioDto } from './dto/create-barrio.dto';
import { UpdateBarrioDto } from './dto/update-barrio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Barrio } from './entities/barrio.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class BarrioService {
  constructor(
    @InjectRepository(Barrio)
    private readonly barrioRepository: Repository<Barrio>,
  ) {}
  async create(createBarrioDto: CreateBarrioDto) {
    try {
      const barrio = this.barrioRepository.create(createBarrioDto);
      await this.barrioRepository.save(barrio);
      return{
        message: 'Barrio creado correctamente',
        barrio
      }
    } catch (error) {
      return{
        message: 'Error al crear el barrio',
        error
      }
      
    }
  }

  async findAll() {
    try {
      return await this.barrioRepository.find();
    } catch (error) {
      return{
        message: 'Error al obtener los barrios',
        error
      }
      
    }
    
  }

  async findOne(id: string) {
    try {
      return await this.barrioRepository.find({
        relations: ['comuna'],
        where: {comuna: Equal(id)}
      });
    } catch (error) {
      return{
        message: 'Error al obtener el barrio',
        error
      }
      
    }
  }

  async update(id: string, updateBarrioDto: UpdateBarrioDto) {
    try {
      const barrio = await this.barrioRepository.findOne({
        where: {id}
      });

      if(barrio){
        await this.barrioRepository.update(id, updateBarrioDto);
        return{
          message: 'Barrio actualizado correctamente',
          barrio
        }
      }
      else{
        return{
          message: 'No existe el barrio'
        }
      
      }
    } catch (error) {
      return{
        message: 'Error al actualizar el barrio',
        error
      
    }
  } 
  }

  async remove(id: string) {
    try {
      return await this.barrioRepository.delete(id);
    } catch (error) {
      return{
        message: 'Error al eliminar el barrio',
        error
      }
      
    }
  }
}
