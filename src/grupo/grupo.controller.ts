import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { ValidRoles } from 'src/user/interfaces';
import { Auth } from 'src/user/decorator';

@Controller('grupo')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.grupoService.create(createGrupoDto); 
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.grupoService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id') id: string) {
    return this.grupoService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.grupoService.update(id, updateGrupoDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.grupoService.remove(id);
  }
}
