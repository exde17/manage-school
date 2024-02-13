import { PartialType } from '@nestjs/swagger';
import { CreateVeredaDto } from './create-vereda.dto';

export class UpdateVeredaDto extends PartialType(CreateVeredaDto) {}
