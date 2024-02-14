import { Grupo } from "src/grupo/entities/grupo.entity";
import { NivelEducativo } from "src/nivel_educativo/entities/nivel_educativo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('grado')
export class Grado {

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

    @ManyToOne(()=>NivelEducativo, (nivelEducativo)=> nivelEducativo.grado)
    nivelEducativo: NivelEducativo

    @OneToMany(()=>Grupo, (grupo)=> grupo.grado)
    grupo: Grupo[]
}
