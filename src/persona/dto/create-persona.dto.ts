import { Optional } from "@nestjs/common";
import { IsDate, IsEnum, IsString } from "class-validator";
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
    nombre: string;

    @IsString()
    apellido: string;

    @IsDate()
    fechaNacimiento: Date;

    @IsEnum(DocumentTypeEnum)
    tipoIdentificacion: DocumentTypeEnum;

    @IsString()
    identificacion: string;

    @IsString()
    genero: GeneroTypeEnum;

    @IsString()
    email: string;

    @IsString()
    telefono: string;

    @IsString()
    departamento: Departamento;

    @IsString()
    ciudad: Ciudad;

    @IsString()
    @Optional()
    barrio?: Barrio;

    @IsString()
    @Optional()
    corregimiento?: Corregimiento;

    @IsString()
    @Optional()
    vereda?: Vereda;

    @IsString()
    @Optional()
    comuna?: Comuna;
}
