import { Asignatura } from "src/asignatura/entities/asignatura.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('area_academica')
export class Area {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    nombre: string;

    @OneToMany(()=>Asignatura, (asignatura)=>asignatura.area)
    asignatura: Asignatura[]
}
