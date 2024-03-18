import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AcudienteService } from './acudiente.service';
import { CreateAcudienteDto } from './dto/create-acudiente.dto';
import { UpdateAcudienteDto } from './dto/update-acudiente.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('acudiente')
export class AcudienteController {
  constructor(private readonly acudienteService: AcudienteService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createAcudienteDto: CreateAcudienteDto) {
    return this.acudienteService.create(createAcudienteDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.acudienteService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.acudienteService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAcudienteDto: UpdateAcudienteDto) {
    return this.acudienteService.update(id, updateAcudienteDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.acudienteService.remove(id);
  }
}
