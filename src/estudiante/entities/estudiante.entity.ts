import { Acudiente } from "src/acudiente/entities/acudiente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiante')
export class Estudiante {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(()=>Persona, (persona)=>persona.estudiante)
    @JoinColumn()
    persona: Persona

    @ManyToOne(()=>Grupo, (grupo)=>grupo.estudiante)
    // @JoinColumn()
    grupo: Grupo;

    @ManyToOne(()=>Acudiente, (acudiente)=>acudiente.estudiante)
    acudiente: Acudiente;
}
