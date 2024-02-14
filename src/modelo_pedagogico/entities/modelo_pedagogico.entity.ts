import { Empresa } from "src/empresa/entities/empresa.entity";
import { RelacionModeloPedagogico } from "src/relacion_modelo_pedagogico/entities/relacion_modelo_pedagogico.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('modelo_pedagogico')
export class ModeloPedagogico {

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

    @OneToMany(()=>RelacionModeloPedagogico, relacionModeloPedagogico => relacionModeloPedagogico.modelosPedagogico)
    relacionModeloPedagogico: RelacionModeloPedagogico[]

    @ManyToOne(()=>Empresa, empresa => empresa.modeloPedagogico)
    empresa: Empresa
}
