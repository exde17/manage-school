import { Area } from "src/area/entities/area.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("asignatura")
export class Asignatura {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    nombre: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    codigo: string;

    @OneToMany(()=>Horario, (horario)=>horario.asignatura)
    horario: Horario

    @ManyToOne(()=>Area, (area)=>area.asignatura)
    area: Area;
}
