import { IsString } from "class-validator";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";

export class CreateVeredaDto {

    @IsString()
    nombre: string;

    @IsString()
    corregimientoId: Corregimiento;
}
