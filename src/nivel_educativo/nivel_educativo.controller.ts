import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { NivelEducativoService } from './nivel_educativo.service';
import { CreateNivelEducativoDto } from './dto/create-nivel_educativo.dto';
import { UpdateNivelEducativoDto } from './dto/update-nivel_educativo.dto';

@Controller('nivel-educativo')
export class NivelEducativoController {
  constructor(private readonly nivelEducativoService: NivelEducativoService) {}

  @Post()
  async create(@Body() createNivelEducativoDto: CreateNivelEducativoDto) {
    return this.nivelEducativoService.create(createNivelEducativoDto);
  }

  @Get()
  async findAll() {
    return this.nivelEducativoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.nivelEducativoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateNivelEducativoDto: UpdateNivelEducativoDto) {
    return this.nivelEducativoService.update(id, updateNivelEducativoDto);
  }

  @Delete(':id')
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.nivelEducativoService.remove(id);
  }
}
