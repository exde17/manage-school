import { DireccionGrupo } from "src/direccion_grupo/entities/direccion_grupo.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Grado } from "src/grado/entities/grado.entity";
import { HistoricoDireccionGrupo } from "src/historico_direccion_grupo/entities/historico_direccion_grupo.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { Jornada } from "src/jornada/entities/jornada.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('grupos')
export class Grupo {

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

    @ManyToOne(()=>Grado, (grado)=>grado.grupo)
    grado: Grado

    @OneToOne(()=>Horario, (horario)=>horario.grupo)
    horario: Horario

    @OneToMany(()=>Estudiante, (estudiante)=>estudiante.grupo)
    estudiante: Estudiante[]

    @ManyToOne(()=>Jornada, (jornada)=>jornada.grupo)
    jornada: Jornada

    @OneToMany(()=>DireccionGrupo, (direccionGrupo)=>direccionGrupo.grupo)
    direccionGrupo: DireccionGrupo

    @OneToMany(()=>HistoricoDireccionGrupo, (historico)=>historico.grupo)
    his_direccionGrupo: HistoricoDireccionGrupo
}
