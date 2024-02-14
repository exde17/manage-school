import { Barrio } from "src/barrio/entities/barrio.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('comuna')
export class Comuna {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    nombre: string;

    @OneToMany(()=>Empresa, empresa => empresa.comuna)
    empresa: Empresa[]

    @ManyToOne(()=>Ciudad, ciudad => ciudad.comuna)
    ciudad: Ciudad

    @OneToMany(()=>Barrio, barrio => barrio.comuna)
    barrio: Barrio;

    @OneToMany(()=>Persona, persona => persona.comuna)
    persona: Persona
}
