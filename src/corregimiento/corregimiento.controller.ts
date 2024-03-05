import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CorregimientoService } from './corregimiento.service';
import { CreateCorregimientoDto } from './dto/create-corregimiento.dto';
import { UpdateCorregimientoDto } from './dto/update-corregimiento.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('corregimiento')
export class CorregimientoController {
  constructor(private readonly corregimientoService: CorregimientoService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createCorregimientoDto: CreateCorregimientoDto) {
    return this.corregimientoService.create(createCorregimientoDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.corregimientoService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.corregimientoService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCorregimientoDto: UpdateCorregimientoDto) {
    return this.corregimientoService.update(id, updateCorregimientoDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.corregimientoService.remove(id);
  }
}
