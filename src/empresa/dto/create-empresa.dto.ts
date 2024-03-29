import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateEmpresaDto {

    @IsString()
    readonly nombre: string;

    @IsString()
    readonly nit: string;

    @IsString()
    readonly codigo: string;

    @IsEmail()
    readonly correo: string;

    @IsString()
    readonly telefono: string;

    @IsString()
    readonly direccion: string;

    @IsString()
    readonly dane: string;

    @IsString()
    @IsOptional()
    readonly comuna?: string;

    @IsString()
    @IsOptional()
    readonly sector?: string;

    @IsString()
    readonly departamento: string;

    @IsString()
    @IsOptional()
    readonly vereda?: string;

    @IsString()
    @IsOptional()
    readonly corregimiento?: string;

    @IsString()
    @IsOptional()
    readonly barrio?: string;

    @IsString()
    readonly ciudad: string;
}
