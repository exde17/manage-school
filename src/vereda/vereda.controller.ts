import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeredaService } from './vereda.service';
import { CreateVeredaDto } from './dto/create-vereda.dto';
import { UpdateVeredaDto } from './dto/update-vereda.dto';

@Controller('vereda')
export class VeredaController {
  constructor(private readonly veredaService: VeredaService) {}

  @Post()
  create(@Body() createVeredaDto: CreateVeredaDto) {
    return this.veredaService.create(createVeredaDto);
  }

  @Get()
  findAll() {
    return this.veredaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veredaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVeredaDto: UpdateVeredaDto) {
    return this.veredaService.update(+id, updateVeredaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veredaService.remove(+id);
  }
}
