import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria_horario')
export class CategoriaHorario {

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

}
