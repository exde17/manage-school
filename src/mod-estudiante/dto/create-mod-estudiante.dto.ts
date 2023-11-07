import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateModEstudianteDto {
    
    @ApiProperty()
    @IsString()
    dane: string;

    @ApiProperty()
    @IsString()
    libro: string;

    @ApiProperty()
    @IsString()
    folio: string;

    @ApiProperty()
    @IsString()
    numeroMatricula: string;

    @ApiProperty()
    @IsString()
    codigoEstudiante: string;

    @ApiProperty()
    @IsString()
    sede: string;

    @ApiProperty()
    @IsString()
    jornada: string;

    @ApiProperty()
    @IsString()
    readonly grado: string;

    @ApiProperty()
    @IsString()
    readonly grupo: string;

    @ApiProperty()
    @IsString()
    readonly modelo: string;

    @ApiProperty()
    @IsString()
    readonly nombre1: string;

    @ApiProperty()
    @IsString()
    readonly nombre2: string;

    @ApiProperty()
    @IsString()
    readonly apellido1: string;

    @ApiProperty()
    @IsString()
    readonly apellido2: string;

    @ApiProperty()
    @IsString()
    readonly tipoDocumento: string;

    @ApiProperty()
    @IsString()
    readonly numeroDocumento: string;

    @ApiProperty()
    @IsDate()
    readonly fechaNacimiento: string;

    @ApiProperty()
    @IsString()
    readonly municipioNacimiento: string;

    @ApiProperty()
    @IsString()
    readonly genero: string;

    @ApiProperty()
    @IsString()
    readonly grupoSanguinea: string;

    @ApiProperty()
    @IsString()
    readonly direccion: string;

    @ApiProperty()
    @IsString()
    readonly telefono: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly ciudad: string;

    @ApiProperty()
    @IsString()
    readonly desplazado: string;

    @ApiProperty()
    @IsString()
    readonly discapacidad: string;

    @ApiProperty()
    @IsString()
    readonly cap: string;

    @ApiProperty()
    @IsString()
    readonly sisben: string;

    @ApiProperty()
    @IsString()
    readonly estrato: string;

    @ApiProperty()
    @IsString()
    readonly grupoEtnico: string;

    @ApiProperty()
    @IsString()
    readonly religion: string;

    @ApiProperty()
    @IsString()
    readonly paisExpedicionDocumento: string;

    @ApiProperty()
    @IsString()
    readonly paisNacimiento: string;

    @ApiProperty()
    @IsString()
    readonly nombreEstablecimientoOrigen: string;

    @ApiProperty()
    @IsString()
    readonly anioLectivoOrigen: string;

    @ApiProperty()
    @IsString()
    readonly gradoOrigen: string;

    @ApiProperty()
    @IsString()
    readonly situacionAcademica: string;

    @ApiProperty()
    @IsString()
    readonly nombreAcudiente: string;

    @ApiProperty()
    @IsString()
    readonly parentesco: string;

    @ApiProperty()
    @IsString()
    readonly documentoAcudiente: string;

    @ApiProperty()
    @IsString()
    readonly direccionAcudiente: string;

    @ApiProperty()
    @IsString()
    readonly telefonoAcudiente: string;

    @ApiProperty()
    @IsString()
    readonly emailAcudiente: string;

    @ApiProperty()
    @IsString()
    readonly numHermanosInsti: string;

}
