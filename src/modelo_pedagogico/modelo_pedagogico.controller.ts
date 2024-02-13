import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModeloPedagogicoService } from './modelo_pedagogico.service';
import { CreateModeloPedagogicoDto } from './dto/create-modelo_pedagogico.dto';
import { UpdateModeloPedagogicoDto } from './dto/update-modelo_pedagogico.dto';

@Controller('modelo-pedagogico')
export class ModeloPedagogicoController {
  constructor(private readonly modeloPedagogicoService: ModeloPedagogicoService) {}

  @Post()
  create(@Body() createModeloPedagogicoDto: CreateModeloPedagogicoDto) {
    return this.modeloPedagogicoService.create(createModeloPedagogicoDto);
  }

  @Get()
  findAll() {
    return this.modeloPedagogicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeloPedagogicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeloPedagogicoDto: UpdateModeloPedagogicoDto) {
    return this.modeloPedagogicoService.update(+id, updateModeloPedagogicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloPedagogicoService.remove(+id);
  }
}
