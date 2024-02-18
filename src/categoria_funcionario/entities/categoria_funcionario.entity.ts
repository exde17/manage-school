import { Docente } from "src/docente/entities/docente.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria_funcionario')
export class CategoriaFuncionario {

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

    @OneToMany(()=>Docente, (docente)=>docente.categoriaFuncionario)
    docente: Docente[]

    @OneToOne(()=>Empresa, (empresa)=>empresa.categoriaFuncionario)
    @JoinColumn()
    empresa: Empresa
}
