import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaHorarioService } from './categoria_horario.service';
import { CreateCategoriaHorarioDto } from './dto/create-categoria_horario.dto';
import { UpdateCategoriaHorarioDto } from './dto/update-categoria_horario.dto';

@Controller('categoria-horario')
export class CategoriaHorarioController {
  constructor(private readonly categoriaHorarioService: CategoriaHorarioService) {}

  @Post()
  create(@Body() createCategoriaHorarioDto: CreateCategoriaHorarioDto) {
    return this.categoriaHorarioService.create(createCategoriaHorarioDto);
  }

  @Get()
  findAll() {
    return this.categoriaHorarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaHorarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaHorarioDto: UpdateCategoriaHorarioDto) {
    return this.categoriaHorarioService.update(+id, updateCategoriaHorarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaHorarioService.remove(+id);
  }
}
