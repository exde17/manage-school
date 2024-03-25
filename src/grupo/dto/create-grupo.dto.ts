import { IsString } from "class-validator";
import { Grado } from "src/grado/entities/grado.entity";
import { Jornada } from "src/jornada/entities/jornada.entity";

export class CreateGrupoDto {

    @IsString()
    readonly nombre: string;

    @IsString()
    readonly codigo: string;

    @IsString()
    readonly grado: Grado;

    @IsString()
    readonly jornada: Jornada;
    
}
