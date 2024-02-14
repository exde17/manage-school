import { Asignatura } from "src/asignatura/entities/asignatura.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("horario")
export class Horario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        
        nullable: false
    })
    dia: string;

    // Definición de la columna de hora de inicio
    @Column('time', { 
        nullable: false,
        name: 'hora_inicio' // Opcional: personaliza el nombre de la columna en la base de datos
    })
    horaInicio: string;

    // Definición de la columna de hora final
    @Column('time', { 
        nullable: false,
        name: 'hora_final' // Opcional: personaliza el nombre de la columna en la base de datos
    })
    horaFinal: string;

    @ManyToOne(()=> Asignatura, (asignatura) => asignatura.horario)
    asignatura: Asignatura

    @OneToOne(()=>Grupo, (grupo) => grupo.horario)
    @JoinColumn()
    grupo: Grupo

    @ManyToOne(()=>Docente, (docente) => docente.horario)
    docente: Docente
}
