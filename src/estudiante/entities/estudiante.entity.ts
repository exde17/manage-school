import { Acudiente } from "src/acudiente/entities/acudiente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiante')
export class Estudiante {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>Persona, (persona)=>persona.estudiante)
    persona: Persona

    @OneToOne(()=>Grupo, (grupo)=>grupo.estudiante)
    @JoinColumn()
    grupo: Grupo

    @OneToOne(()=>Acudiente, (acudiente)=>acudiente.estudiante)
    acudiente: Acudiente;
}
