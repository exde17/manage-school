import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("departamento")
export class Departamento {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false, 
        unique: true
    })
    nombre: string;

    @Column('text',{
        nullable: false,
        unique: true
    })
    codigo: string;

    @OneToMany(()=>Empresa, empresa => empresa.departamento)
    empresa: Empresa[]

    @OneToMany(()=>Ciudad, ciudad => ciudad.departamento)
    ciudad: Ciudad[]

    @OneToMany(()=>Persona, persona => persona.departamento)
    persona: Persona[]
}
