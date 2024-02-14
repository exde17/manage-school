import { PartialType } from '@nestjs/swagger';
import { CreateRelacionModeloPedagogicoDto } from './create-relacion_modelo_pedagogico.dto';

export class UpdateRelacionModeloPedagogicoDto extends PartialType(CreateRelacionModeloPedagogicoDto) {}
