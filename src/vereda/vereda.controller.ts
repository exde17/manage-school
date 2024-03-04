import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VeredaService } from './vereda.service';
import { CreateVeredaDto } from './dto/create-vereda.dto';
import { UpdateVeredaDto } from './dto/update-vereda.dto';
import { ValidRoles } from 'src/user/interfaces';
import { Auth } from 'src/user/decorator';

@Controller('vereda')
export class VeredaController {
  constructor(private readonly veredaService: VeredaService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createVeredaDto: CreateVeredaDto) {
    return this.veredaService.create(createVeredaDto);
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.veredaService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.veredaService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateVeredaDto: UpdateVeredaDto) {
    return this.veredaService.update(id, updateVeredaDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.veredaService.remove(id);
  }
}
