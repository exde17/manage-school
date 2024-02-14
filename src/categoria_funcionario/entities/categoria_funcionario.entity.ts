import { Docente } from "src/docente/entities/docente.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}
