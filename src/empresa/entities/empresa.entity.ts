import { Barrio } from "src/barrio/entities/barrio.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { Sector } from "src/sector/entities/sector.entity";
import { Vereda } from "src/vereda/entities/vereda.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('empresa')
export class Empresa {

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
    nit: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    codigo: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    correo: string;

    @Column('text',{
        
        nullable: false
    })
    telefono: string;

    @Column('text',{
       
        nullable: false
    })
    direccion: string;

    @Column('text',{
        unique: true,
        nullable: false
    })
    dane: string;

    @ManyToOne(() => Comuna, (comuna) => comuna.empresa)
    comuna: Comuna;

    @ManyToOne(()=> Sector, (sector) => sector.empresa)
    sector: Sector;

    @ManyToOne(()=> Departamento, (departamento) => departamento.empresa)
    departamento: Departamento;

    @ManyToOne(()=> Ciudad, (ciudad) => ciudad.empresa)
    ciudad: Ciudad;

    @ManyToOne(()=> Vereda, (vereda) => vereda.empresa)
    vereda: Vereda;

    @ManyToOne(()=> Corregimiento, (corregimiento) => corregimiento.empresa)
    corregimiento: Corregimiento;

    @ManyToOne(()=> Barrio, (barrio) => barrio.empresa)
    barrio: Barrio;
}
