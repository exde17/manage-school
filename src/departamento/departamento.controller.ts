import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Auth } from 'src/user/decorator';
// import { UseRoleGuard } from 'src/user/guards/use-role/use-role.guard';
import { ValidRoles } from 'src/user/interfaces';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
  async create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
  async findAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.departamentoService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(id, updateDepartamentoDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.departamentoService.remove(id);
  }
}
