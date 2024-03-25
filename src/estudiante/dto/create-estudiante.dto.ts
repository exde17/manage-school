import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Acudiente } from "src/acudiente/entities/acudiente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Persona } from "src/persona/entities/persona.entity";

export class CreateEstudianteDto {

    @IsString()
    readonly persona: string;

    @IsString()
    readonly grupo: string;

    @IsString()
    readonly acudiente: string

}
