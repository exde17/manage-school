import { Comuna } from "src/comuna/entities/comuna.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Sede } from "src/sede/entities/sede.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('barrio')
export class Barrio {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    nombre: string;

    @OneToMany(()=>Empresa, empresa => empresa.barrio)
    empresa: Empresa[]

    @ManyToOne(()=>Comuna, comuna => comuna.barrio)
    comuna: Comuna

    @OneToMany(()=>Sede, sede => sede.barrio)
    sede: Sede[]

    @OneToMany(()=>Persona, persona => persona.barrio)
    persona: Persona[]
}
