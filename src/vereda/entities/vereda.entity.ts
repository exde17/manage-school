import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('vereda')
export class Vereda {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    nombre: string;

    @OneToMany(()=>Empresa, empresa => empresa.vereda)
    empresa: Empresa[]

    @ManyToOne(()=>Corregimiento, corregimiento => corregimiento.vereda)
    corregimiento: Corregimiento

    @OneToMany(()=>Persona, persona => persona.vereda)
    persona: Persona;
}
