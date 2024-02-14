import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudad')
export class Ciudad {

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

    @OneToMany(()=>Empresa, empresa => empresa.ciudad)
    empresa: Empresa[]

    @ManyToOne(()=> Departamento, departamento => departamento.ciudad)
    departamento: Departamento[]

    @OneToMany(()=>Comuna, comuna => comuna.ciudad)
    comuna: Comuna[]

    @OneToMany(()=> Corregimiento,corregimiento => corregimiento.ciudad)
    corregimiento: Corregimiento[]

    @OneToMany(()=>Persona, persona => persona.ciudad)
    persona: Persona[]
}
