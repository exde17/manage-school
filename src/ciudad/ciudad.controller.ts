import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { ValidRoles } from 'src/user/interfaces';
import { Auth } from 'src/user/decorator';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async create(@Body() createCiudadDto: CreateCiudadDto) {
    return this.ciudadService.create(createCiudadDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.user, ValidRoles.superUser)
  async findAll() {
    return this.ciudadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ciudadService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCiudadDto: UpdateCiudadDto) {
    return this.ciudadService.update(id, updateCiudadDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ciudadService.remove(id);
  }
}
