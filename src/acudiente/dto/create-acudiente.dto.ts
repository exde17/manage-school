import { IsString } from "class-validator";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Persona } from "src/persona/entities/persona.entity";

export class CreateAcudienteDto {

    @IsString()
    readonly persona: Persona;

    // @IsString()
    // readonly estudiante: Estudiante;
}
