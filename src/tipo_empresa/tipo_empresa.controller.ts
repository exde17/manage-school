import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEmpresaService } from './tipo_empresa.service';
import { CreateTipoEmpresaDto } from './dto/create-tipo_empresa.dto';
import { UpdateTipoEmpresaDto } from './dto/update-tipo_empresa.dto';

@Controller('tipo-empresa')
export class TipoEmpresaController {
  constructor(private readonly tipoEmpresaService: TipoEmpresaService) {}

  @Post()
  create(@Body() createTipoEmpresaDto: CreateTipoEmpresaDto) {
    return this.tipoEmpresaService.create(createTipoEmpresaDto);
  }

  @Get()
  findAll() {
    return this.tipoEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEmpresaDto: UpdateTipoEmpresaDto) {
    return this.tipoEmpresaService.update(+id, updateTipoEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEmpresaService.remove(+id);
  }
}
