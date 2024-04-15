import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Barrio } from "src/barrio/entities/barrio.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { DocumentTypeEnum } from "src/utils/document-type-enum";
import { GeneroTypeEnum } from "src/utils/genero-type-enum";
import { Vereda } from "src/vereda/entities/vereda.entity";

export class CreatePersonaDto {

    @IsString()
    readonly nombre: string;

    @IsString()
    readonly apellido: string;

    // @IsDate()
    // fechaNacimiento: Date;
    @IsString()
    readonly fechaNacimiento: string;

    @IsEnum(DocumentTypeEnum)
    readonly tipoIdentificacion: DocumentTypeEnum;

    @IsString()
    readonly identificacion: string;

    @IsString()
    readonly genero: GeneroTypeEnum;

    @IsString()
    readonly email: string;

    @IsString()
    readonly telefono: string;

    @IsString()
    readonly departamento: Departamento;

    @IsString()
    readonly ciudad: Ciudad;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => Barrio)
    @IsOptional()
    @IsOptional()
    readonly barrio?: Barrio;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => Corregimiento)
    @IsOptional()
    @IsOptional()
    readonly corregimiento?: Corregimiento;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => Vereda)
    @IsOptional()
    @IsOptional()
    readonly vereda?: Vereda;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => Comuna)
    @IsOptional()
    @IsOptional()
    readonly comuna?: Comuna;
}
