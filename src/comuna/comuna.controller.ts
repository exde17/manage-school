import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ComunaService } from './comuna.service';
import { CreateComunaDto } from './dto/create-comuna.dto';
import { UpdateComunaDto } from './dto/update-comuna.dto';
import { ValidRoles } from 'src/user/interfaces';
import { Auth } from 'src/user/decorator';

@Controller('comuna')
export class ComunaController {
  constructor(private readonly comunaService: ComunaService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.user)
  async create(@Body() createComunaDto: CreateComunaDto) {
    return this.comunaService.create(createComunaDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.user)
  async findAll() {
    return this.comunaService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.user)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.comunaService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.user)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateComunaDto: UpdateComunaDto) {
    return this.comunaService.update(id, updateComunaDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.user)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.comunaService.remove(id);
  }
}
