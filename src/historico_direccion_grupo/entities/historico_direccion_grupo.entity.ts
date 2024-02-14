import { Docente } from "src/docente/entities/docente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("historico_direccion_grupo")
export class HistoricoDireccionGrupo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    codigo: string;

    @ManyToOne(()=>Docente, (docente)=>docente.his_direccionGrupo)
    docente: Docente;

    @ManyToOne(()=>Grupo, (grupo)=>grupo.his_direccionGrupo)
    grupo: Grupo;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
      })
      createAt: Date;
}
