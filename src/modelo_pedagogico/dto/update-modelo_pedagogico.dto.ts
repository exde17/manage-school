import { PartialType } from '@nestjs/swagger';
import { CreateModeloPedagogicoDto } from './create-modelo_pedagogico.dto';

export class UpdateModeloPedagogicoDto extends PartialType(CreateModeloPedagogicoDto) {}
