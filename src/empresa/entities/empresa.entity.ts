import { Barrio } from "src/barrio/entities/barrio.entity";
import { CategoriaFuncionario } from "src/categoria_funcionario/entities/categoria_funcionario.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { ModeloPedagogico } from "src/modelo_pedagogico/entities/modelo_pedagogico.entity";
import { RelacionModeloPedagogico } from "src/relacion_modelo_pedagogico/entities/relacion_modelo_pedagogico.entity";
import { Sector } from "src/sector/entities/sector.entity";
import { Sede } from "src/sede/entities/sede.entity";
import { Vereda } from "src/vereda/entities/vereda.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToMany(()=>Sede, (sede) => sede.empresa)
    sede: Sede[]

    @OneToMany(()=>RelacionModeloPedagogico, (relacionModeloPedagogico) => relacionModeloPedagogico.empresa)
    relacionModeloPedagogico: RelacionModeloPedagogico[]

    @OneToMany(()=>ModeloPedagogico, (modeloPedagogico) => modeloPedagogico.empresa)
    modeloPedagogico: ModeloPedagogico[]

    @OneToOne(()=>CategoriaFuncionario, (categoriaFuncionario) => categoriaFuncionario.empresa)
    categoriaFuncionario: CategoriaFuncionario

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
      })
      createAt: Date
    
      @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'updated_at',
      })
      updateAt: Date
}
