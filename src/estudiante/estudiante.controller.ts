import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.estudianteService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(id, updateEstudianteDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.estudianteService.remove(id);
  }
}
