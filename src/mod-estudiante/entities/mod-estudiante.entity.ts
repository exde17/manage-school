import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'estudiante',
  // schema: 'estudiante',
})
export class ModEstudiante {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  dane: string;

  @Column('text', {
    nullable: false,
  })
  libro: string;

  @Column('text', {
    nullable: false,
  })
  folio: string;

  @Column('text', {
    nullable: false,
    name: 'numero_matricula',
  })
  numeroMatricula: string;

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
  updateAt: Date;

  @Column('text', {
    nullable: false,
    name: 'codigo_estudiante',
  })
  codigoEstudiante: string;

  @Column('text', {
    nullable: true,
  })
  sede: string;

  @Column('text', {
    nullable: false,
  })
  jornada: string;

  @Column('text', {
    nullable: false,
  })
  grado: string;

  @Column('text', {
    nullable: false,
  })
  modelo: string;

  @Column('text', {
    nullable: false,
  })
  grupo: string;

  @Column('text', {
    nullable: false,
    name: 'primer_nombre',
  })
  nombre1: string;

  @Column('text', {
    nullable: true,
    name: 'segundo_nombre',
  })
  nombre2: string;

  @Column('text', {
    nullable: false,
    name: 'primer_apellido',
  })
  apellido1: string;

  @Column('text', {
    nullable: false,
    name: 'segundo_apellido',
  })
  apellido2: string;

  @Column('text', {
    nullable: false,
    name: 'tipo_documento',
  })
  tipoDocumento: string;

  @Column('text', {
    nullable: false,
    name: 'numero_documento',
  })
  numeroDocumento: string;

  @Column('date', {
    nullable: false,
    name: 'fecha_nacimiento',
  })
  fechaNacimiento: string;

  @Column('text', {
    nullable: false,
    name: 'municipio_nacimiento',
  })
  municipioNacimiento: string;

  @Column('text', {
    nullable: false,
  })
  genero: string;

  @Column('text', {
    nullable: false,
    name: 'grupo_sanguineo',
  })
  grupoSanguinea: string;

  @Column('text', {
    nullable: false,
  })
  direccion: string;

  @Column('text', {
    nullable: false,
  })
  telefono: string;

  @Column('text', {
    nullable: false,
  })
  ciudad: string;

  @Column('text', {
    nullable: true,
    unique: true,
  })
  email: string;

  @Column('text', {
    nullable: false,
  })
  desplazado: string;

  @Column('text', {
    nullable: false,
  })
  discapacidad: string;

  @Column('text', {
    nullable: false,
  })
  cap: string;

  @Column('text', {
    nullable: false,
    name: 'nivel_sisben',
  })
  sisben: string;

  @Column('text', {
    nullable: false,
  })
  estrato: string;

  @Column('text', {
    nullable: false,
    name: 'grupo_etnico',
  })
  grupoEtnico: string;

  @Column('text', {
    nullable: true,
  })
  religion: string;

  @Column('text', {
    nullable: false,
    name: 'pais_expedicion_documento',
  })
  paisExpedicionDocumento: string;

  @Column('text', {
    nullable: false,
    name: 'pais_nacimiento',
  })
  paisNacimiento: string;

  // informacion de establecimiento de origen

  @Column('text', {
    nullable: false,
    name: 'nombre_establecimiento_origen',
  })
  nombreEstablecimientoOrigen: string;

  @Column('text', {
    nullable: false,
    name: 'anio_lectivo_origen',
  })
  anioLectivoOrigen: string;

  @Column('text', {
    nullable: false,
    name: 'grado_origen',
  })
  gradoOrigen: string;

  @Column('text', {
    nullable: false,
    name: 'situacion_academica',
  })
  situacionAcademica: string;

  // informacion familiar

  @Column('text', {
    nullable: false,
    name: 'nombre_acudiente',
  })
  nombreAcudiente: string;

  @Column('text', {
    nullable: false,
  })
  parentesco: string;

  @Column('text', {
    nullable: false,
    name: 'documento_acudiente',
  })
  documentoAcudiente: string;

  @Column('text', {
    nullable: false,
    name: 'direccion_acudiente',
  })
  direccionAcudiente: string;

  @Column('text', {
    nullable: false,
    name: 'telefono_acudiente',
  })
  telefonoAcudiente: string;

  @Column('text', {
    nullable: true,
    name: 'email_acudiente',
  })
  emailAcudiente: string;

  @Column('text', {
    nullable: true,
    name: 'numero_hermanos_institucion',
  })
  numHermanosInsti: string;

  @Column('bool', {
    name: 'is_active',
    default: true,
  })
  isActive: boolean;
}
