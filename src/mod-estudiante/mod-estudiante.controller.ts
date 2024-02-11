import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ModEstudianteService } from './mod-estudiante.service';
import { CreateModEstudianteDto } from './dto/create-mod-estudiante.dto';
import { UpdateModEstudianteDto } from './dto/update-mod-estudiante.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseRoleGuard } from 'src/user/guards/use-role/use-role.guard';

@Controller('mod-estudiante')
export class ModEstudianteController {
  constructor(private readonly modEstudianteService: ModEstudianteService) {}

  @Post()
  @UseGuards(AuthGuard(), UseRoleGuard)
  async create(@Body() createModEstudianteDto: CreateModEstudianteDto) {
    return this.modEstudianteService.create(createModEstudianteDto);
  }

  @Get()
  findAll() { 
    try {
      return this.modEstudianteService.findAll();
       
      
    } catch (error) {
      console.log(error)
      return error
      
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modEstudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModEstudianteDto: UpdateModEstudianteDto) {
    return this.modEstudianteService.update(+id, updateModEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modEstudianteService.remove(+id);
  }
}
