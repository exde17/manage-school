import { IsString } from "class-validator";

export class CreateNivelEducativoDto {

    @IsString()
    nombre: string;

    @IsString()
    codigo: string;
    
}
