import { IsString } from "class-validator";

export class CreateCategoriaFuncionarioDto {

    @IsString()
    readonly nombre: string;

    @IsString()
    readonly codigo: string;
}
