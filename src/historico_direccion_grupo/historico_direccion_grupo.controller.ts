import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricoDireccionGrupoService } from './historico_direccion_grupo.service';
import { CreateHistoricoDireccionGrupoDto } from './dto/create-historico_direccion_grupo.dto';
import { UpdateHistoricoDireccionGrupoDto } from './dto/update-historico_direccion_grupo.dto';

@Controller('historico-direccion-grupo')
export class HistoricoDireccionGrupoController {
  constructor(private readonly historicoDireccionGrupoService: HistoricoDireccionGrupoService) {}

  @Post()
  create(@Body() createHistoricoDireccionGrupoDto: CreateHistoricoDireccionGrupoDto) {
    return this.historicoDireccionGrupoService.create(createHistoricoDireccionGrupoDto);
  }

  @Get()
  findAll() {
    return this.historicoDireccionGrupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicoDireccionGrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricoDireccionGrupoDto: UpdateHistoricoDireccionGrupoDto) {
    return this.historicoDireccionGrupoService.update(+id, updateHistoricoDireccionGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicoDireccionGrupoService.remove(+id);
  }
}
