import { Grado } from "src/grado/entities/grado.entity";
import { Sede } from "src/sede/entities/sede.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("nivel_educativo")
export class NivelEducativo { 

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

    @OneToMany(()=> Sede, sede => sede.nivelEducativo)
    sede: Sede[]

    @OneToMany(()=> Grado, grado => grado.nivelEducativo)
    grado: Grado[]
}
