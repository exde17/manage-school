import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {}
  async create(createAreaDto: CreateAreaDto) {
    try {
      const area = this.areaRepository.create(createAreaDto);
      const area1=await this.areaRepository.save(area);
      return {
        message: 'Area created successfully',
        data: area1,
      }
    } catch (error) {
      return {
        message: 'Error: Area not created',
        data: error.message,
      }
      
    }
  }

  async findAll() {
    try {
      return await this.areaRepository.find();
    } catch (error) {
      return {
        message: 'Error: Areas not found',
        data: error.message,
      }
      
    }
  }

  async findOne(id: string) {
    try {
      const area =await this.areaRepository.findOne({
        where: { id },
      });
      if (area) {
        return {
          message: 'Area found',
          data: area,
        }
      } else {
        return {
          message: 'Area not found',
          data: null,
        }
      }
    } catch (error) {
      return {
        message: 'Error: Area not found',
        data: error.message,
      }
      
    }
  }

  async update(id: string, updateAreaDto: UpdateAreaDto) {
    try {
      const area = await this.areaRepository.preload({
        id: id,
        ...updateAreaDto,
      });
      if (area) {
        await this.areaRepository.save(area);
        return {
          message: 'Area updated successfully',
          data: area,
        }
      } else {
        return {
          message: 'Area not found',
          data: null,
        }
      }
    } catch (error) {
      return {
        message: 'Error: Area not updated',
        data: error.message,
      }
      
    }
  }

  async remove(id: string) {
    try {
      const area = await this.areaRepository.findOne({
        where: { id },
      });
      if (area) {
        await this.areaRepository.remove(area);
        return {
          message: 'Area deleted successfully',
          data: area,
        }
      } else {
        return {
          message: 'Area not found',
          data: null,
        }
      }
    } catch (error) {
      return {
        message: 'Error: Area not deleted',
        data: error.message,
      }
      
    }
  }
}
