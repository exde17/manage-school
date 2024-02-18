import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Vereda } from "src/vereda/entities/vereda.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('corregimiento')
export class Corregimiento {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false 
    })
    nombre: string;

    @OneToMany(()=>Empresa, empresa => empresa.corregimiento)
    empresa: Empresa[]

    @ManyToOne(()=> Ciudad, ciudad => ciudad.corregimiento)
    ciudad: Ciudad

    @OneToMany(()=> Vereda, vereda => vereda.corregimiento)
    vereda: Vereda[]

    @OneToMany(()=>Persona, persona => persona.corregimiento)
    persona: Persona[]

}
