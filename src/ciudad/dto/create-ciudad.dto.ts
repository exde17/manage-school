import { IsString } from "class-validator";
import { Departamento } from "src/departamento/entities/departamento.entity";

export class CreateCiudadDto {

    @IsString()
    nombre: string;

    @IsString()
    codigo: string;

    @IsString()
    departamento: string | Departamento;
}
