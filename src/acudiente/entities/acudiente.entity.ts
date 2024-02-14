import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('acudiente')
export class Acudiente {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> Persona, persona => persona.acudiente)
    persona: Persona;

    @OneToOne(()=>Estudiante, estudiante => estudiante.acudiente)
    @JoinColumn()
    estudiante: Estudiante
}
