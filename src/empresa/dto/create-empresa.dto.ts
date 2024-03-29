import { IsEmail, IsOptional, IsString } from "class-validator";
import { Barrio } from "src/barrio/entities/barrio.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { Sector } from "src/sector/entities/sector.entity";
import { Vereda } from "src/vereda/entities/vereda.entity";

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
    readonly comuna?: Comuna;

    @IsString()
    @IsOptional()
    readonly sector?: Sector;

    @IsString()
    readonly departamento: Departamento;

    @IsString()
    @IsOptional()
    readonly vereda?: Vereda;

    @IsString()
    @IsOptional()
    readonly corregimiento?: Corregimiento;

    @IsString()
    @IsOptional()
    readonly barrio?: Barrio;

    @IsString()
    readonly ciudad: Ciudad;
}
