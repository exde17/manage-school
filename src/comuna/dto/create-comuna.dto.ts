import { IsString } from "class-validator";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";

export class CreateComunaDto {

    @IsString()
    nombre: string;

    @IsString()
    ciudad: Ciudad;
}
