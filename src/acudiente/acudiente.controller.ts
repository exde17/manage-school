import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcudienteService } from './acudiente.service';
import { CreateAcudienteDto } from './dto/create-acudiente.dto';
import { UpdateAcudienteDto } from './dto/update-acudiente.dto';

@Controller('acudiente')
export class AcudienteController {
  constructor(private readonly acudienteService: AcudienteService) {}

  @Post()
  create(@Body() createAcudienteDto: CreateAcudienteDto) {
    return this.acudienteService.create(createAcudienteDto);
  }

  @Get()
  findAll() {
    return this.acudienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acudienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcudienteDto: UpdateAcudienteDto) {
    return this.acudienteService.update(+id, updateAcudienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acudienteService.remove(+id);
  }
}
