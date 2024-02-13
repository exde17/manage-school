import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorregimientoService } from './corregimiento.service';
import { CreateCorregimientoDto } from './dto/create-corregimiento.dto';
import { UpdateCorregimientoDto } from './dto/update-corregimiento.dto';

@Controller('corregimiento')
export class CorregimientoController {
  constructor(private readonly corregimientoService: CorregimientoService) {}

  @Post()
  create(@Body() createCorregimientoDto: CreateCorregimientoDto) {
    return this.corregimientoService.create(createCorregimientoDto);
  }

  @Get()
  findAll() {
    return this.corregimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corregimientoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorregimientoDto: UpdateCorregimientoDto) {
    return this.corregimientoService.update(+id, updateCorregimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corregimientoService.remove(+id);
  }
}
