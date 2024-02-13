import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaFuncionarioService } from './categoria_funcionario.service';
import { CreateCategoriaFuncionarioDto } from './dto/create-categoria_funcionario.dto';
import { UpdateCategoriaFuncionarioDto } from './dto/update-categoria_funcionario.dto';

@Controller('categoria-funcionario')
export class CategoriaFuncionarioController {
  constructor(private readonly categoriaFuncionarioService: CategoriaFuncionarioService) {}

  @Post()
  create(@Body() createCategoriaFuncionarioDto: CreateCategoriaFuncionarioDto) {
    return this.categoriaFuncionarioService.create(createCategoriaFuncionarioDto);
  }

  @Get()
  findAll() {
    return this.categoriaFuncionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaFuncionarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaFuncionarioDto: UpdateCategoriaFuncionarioDto) {
    return this.categoriaFuncionarioService.update(+id, updateCategoriaFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaFuncionarioService.remove(+id);
  }
}
