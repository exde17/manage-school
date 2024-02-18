import { IsString } from "class-validator";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";

export class CreateCorregimientoDto {

    @IsString()
    nombre: string;

    @IsString()
    ciudadId: Ciudad;
}
