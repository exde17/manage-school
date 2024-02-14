import { Barrio } from "src/barrio/entities/barrio.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { NivelEducativo } from "src/nivel_educativo/entities/nivel_educativo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sede')
export class Sede {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text',{
        nullable: true
    })
    nombre: string

    @Column('text',{
        nullable: false,
        unique: true
    })
    dane: string;

    @Column('text',{
        nullable: true,
        name: 'max_grado',
    })
    maxGrado: string;

    @ManyToOne(()=>Empresa, empresa => empresa.sede)
    empresa: Empresa

    @ManyToOne(()=>Barrio, barrio => barrio.sede)
    barrio: Barrio

    @ManyToOne(()=> NivelEducativo, nivelEducativo => nivelEducativo.sede)
    nivelEducativo: NivelEducativo
}
