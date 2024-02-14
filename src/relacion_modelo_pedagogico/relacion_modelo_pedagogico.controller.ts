import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelacionModeloPedagogicoService } from './relacion_modelo_pedagogico.service';
import { CreateRelacionModeloPedagogicoDto } from './dto/create-relacion_modelo_pedagogico.dto';
import { UpdateRelacionModeloPedagogicoDto } from './dto/update-relacion_modelo_pedagogico.dto';

@Controller('relacion-modelo-pedagogico')
export class RelacionModeloPedagogicoController {
  constructor(private readonly relacionModeloPedagogicoService: RelacionModeloPedagogicoService) {}

  @Post()
  create(@Body() createRelacionModeloPedagogicoDto: CreateRelacionModeloPedagogicoDto) {
    return this.relacionModeloPedagogicoService.create(createRelacionModeloPedagogicoDto);
  }

  @Get()
  findAll() {
    return this.relacionModeloPedagogicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relacionModeloPedagogicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelacionModeloPedagogicoDto: UpdateRelacionModeloPedagogicoDto) {
    return this.relacionModeloPedagogicoService.update(+id, updateRelacionModeloPedagogicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relacionModeloPedagogicoService.remove(+id);
  }
}
