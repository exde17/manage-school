import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BarrioService } from './barrio.service';
import { CreateBarrioDto } from './dto/create-barrio.dto';
import { UpdateBarrioDto } from './dto/update-barrio.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('barrio')
export class BarrioController {
  constructor(private readonly barrioService: BarrioService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async create(@Body() createBarrioDto: CreateBarrioDto) {
    return this.barrioService.create(createBarrioDto); 
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findAll() {
    return this.barrioService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.barrioService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateBarrioDto: UpdateBarrioDto) {
    return this.barrioService.update(id, updateBarrioDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.barrioService.remove(id);
  }
}
