import { IsString } from "class-validator";
import { Comuna } from "src/comuna/entities/comuna.entity";

export class CreateBarrioDto {

    @IsString()
    nombre: string;

    @IsString()
    comuna: Comuna;
}
