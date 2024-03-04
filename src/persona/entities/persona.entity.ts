import { Acudiente } from "src/acudiente/entities/acudiente.entity";
import { Barrio } from "src/barrio/entities/barrio.entity";
import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Comuna } from "src/comuna/entities/comuna.entity";
import { Corregimiento } from "src/corregimiento/entities/corregimiento.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { DocumentTypeEnum } from "src/utils/document-type-enum";
import { GeneroTypeEnum } from "src/utils/genero-type-enum";
import { Vereda } from "src/vereda/entities/vereda.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('persona')
export class Persona {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false 
    })
    nombre: string;

    @Column('text',{
        nullable: false
    })
    apellido: string;

    // @Column('date',{
    //     nullable: false
        
    // })
    // fechaNacimiento: Date;
    @Column('text',{
        nullable: true
        
    })
    fechaNacimiento: string;

    @Column('enum',{
        enum: DocumentTypeEnum,
        default: DocumentTypeEnum.CedulaCiudadania,
        name: 'tipo_identificacion'
    })
    tipoIdentificacion: DocumentTypeEnum;

    @Column('text',{
        nullable: false,
        name: 'numero_identificacion',
        unique: true
    })
    identificacion: string;

    @Column('enum',{
        enum: GeneroTypeEnum,
        default: GeneroTypeEnum.Masculino,
    })
    genero: GeneroTypeEnum;

    @Column('text',{
        nullable: false,
        unique: true
    })
    email: string;

    @Column('text',{
        nullable: false,
        unique: true
    })
    telefono: string;

    @ManyToOne(()=>Departamento, (departamento)=>departamento.persona)
    departamento: Departamento

    @ManyToOne(()=> Ciudad, (ciudad)=>ciudad.persona)
    ciudad: Ciudad

    @ManyToOne(()=>Barrio, (barrio)=>barrio.persona, {nullable: true})
    barrio: Barrio

    @ManyToOne(()=>Corregimiento, (corregimiento)=>corregimiento.persona, {nullable: true})
    corregimiento: Corregimiento

    @ManyToOne(()=>Vereda, (vereda) => vereda.persona, {nullable: true}) 
    vereda: Vereda

    @ManyToOne(()=>Comuna, (comuna) => comuna.persona, {nullable: true})
    comuna: Comuna

    @OneToOne(()=>Estudiante, (estudiante) => estudiante.persona)
    estudiante: Estudiante

    @OneToMany(()=>Acudiente, (acudiente) => acudiente.persona)
    acudiente: Acudiente

    @OneToOne(()=>Docente, (docente) => docente.persona)
    docente: Docente
}
