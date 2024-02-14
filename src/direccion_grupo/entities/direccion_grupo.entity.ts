import { Docente } from "src/docente/entities/docente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('direccion_grupos')
export class DireccionGrupo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    codigo: string;

    @ManyToOne(()=>Docente, (docente)=>docente.direccionGrupo)
    docente: Docente;

    @ManyToOne(()=>Grupo, (grupo)=>grupo.direccionGrupo)
    grupo: Grupo;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
      })
      createAt: Date;
    
      @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'updated_at',
      })
      updatedAt: Date;
}
