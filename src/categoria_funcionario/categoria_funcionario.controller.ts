import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CategoriaFuncionarioService } from './categoria_funcionario.service';
import { CreateCategoriaFuncionarioDto } from './dto/create-categoria_funcionario.dto';
import { UpdateCategoriaFuncionarioDto } from './dto/update-categoria_funcionario.dto';

@Controller('categoria-funcionario')
export class CategoriaFuncionarioController {
  constructor(private readonly categoriaFuncionarioService: CategoriaFuncionarioService) {}

  @Post()
  async create(@Body() createCategoriaFuncionarioDto: CreateCategoriaFuncionarioDto) {
    return this.categoriaFuncionarioService.create(createCategoriaFuncionarioDto);
  }

  @Get()
  async findAll() {
    return this.categoriaFuncionarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriaFuncionarioService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateCategoriaFuncionarioDto: UpdateCategoriaFuncionarioDto) {
    return this.categoriaFuncionarioService.update(id, updateCategoriaFuncionarioDto);
  }

  @Delete(':id')
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.categoriaFuncionarioService.remove(id);
  }
}
