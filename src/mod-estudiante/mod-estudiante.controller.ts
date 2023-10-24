import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModEstudianteService } from './mod-estudiante.service';
import { CreateModEstudianteDto } from './dto/create-mod-estudiante.dto';
import { UpdateModEstudianteDto } from './dto/update-mod-estudiante.dto';

@Controller('mod-estudiante')
export class ModEstudianteController {
  constructor(private readonly modEstudianteService: ModEstudianteService) {}

  @Post()
  create(@Body() createModEstudianteDto: CreateModEstudianteDto) {
    return this.modEstudianteService.create(createModEstudianteDto);
  }

  @Get()
  findAll() {
    return this.modEstudianteService.findAll();
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
