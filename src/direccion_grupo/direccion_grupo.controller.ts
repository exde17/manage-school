import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionGrupoService } from './direccion_grupo.service';
import { CreateDireccionGrupoDto } from './dto/create-direccion_grupo.dto';
import { UpdateDireccionGrupoDto } from './dto/update-direccion_grupo.dto';

@Controller('direccion-grupo')
export class DireccionGrupoController {
  constructor(private readonly direccionGrupoService: DireccionGrupoService) {}

  @Post()
  create(@Body() createDireccionGrupoDto: CreateDireccionGrupoDto) {
    return this.direccionGrupoService.create(createDireccionGrupoDto);
  }

  @Get()
  findAll() {
    return this.direccionGrupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionGrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDireccionGrupoDto: UpdateDireccionGrupoDto) {
    return this.direccionGrupoService.update(+id, updateDireccionGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.direccionGrupoService.remove(+id);
  }
}
