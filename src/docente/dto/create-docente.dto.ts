import { IsString } from "class-validator";
import { CategoriaFuncionario } from "src/categoria_funcionario/entities/categoria_funcionario.entity";
import { Persona } from "src/persona/entities/persona.entity";

export class CreateDocenteDto {

    @IsString()
    readonly persona: Persona;

    @IsString()
    readonly categoriaFuncionario: CategoriaFuncionario;
}
