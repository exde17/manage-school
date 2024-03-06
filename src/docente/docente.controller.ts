import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docenteService.create(createDocenteDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.docenteService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.docenteService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docenteService.update(id, updateDocenteDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.docenteService.remove(id);
  }
}
