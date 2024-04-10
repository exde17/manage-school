import { IsString } from "class-validator";
import { Area } from "src/area/entities/area.entity";

export class CreateAsignaturaDto {
    @IsString()
    nombre: string;

    @IsString()
    codigo: string;

    // @IsString()
    area: Area;
}
