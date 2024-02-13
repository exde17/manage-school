import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoSectorService } from './tipo_sector.service';
import { CreateTipoSectorDto } from './dto/create-tipo_sector.dto';
import { UpdateTipoSectorDto } from './dto/update-tipo_sector.dto';

@Controller('tipo-sector')
export class TipoSectorController {
  constructor(private readonly tipoSectorService: TipoSectorService) {}

  @Post()
  create(@Body() createTipoSectorDto: CreateTipoSectorDto) {
    return this.tipoSectorService.create(createTipoSectorDto);
  }

  @Get()
  findAll() {
    return this.tipoSectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoSectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoSectorDto: UpdateTipoSectorDto) {
    return this.tipoSectorService.update(+id, updateTipoSectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoSectorService.remove(+id);
  }
}
