import { CategoriaFuncionario } from "src/categoria_funcionario/entities/categoria_funcionario.entity";
import { DireccionGrupo } from "src/direccion_grupo/entities/direccion_grupo.entity";
import { HistoricoDireccionGrupo } from "src/historico_direccion_grupo/entities/historico_direccion_grupo.entity";
import { Horario } from "src/horario/entities/horario.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("docente")
export class Docente { 

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(()=> Persona, (persona) => persona.docente)
    @JoinColumn()
    persona: Persona;

    @ManyToOne(()=> CategoriaFuncionario, (categoriaFuncionario) => categoriaFuncionario.docente)
    categoriaFuncionario: CategoriaFuncionario

    @OneToMany(()=> Horario, (horario) => horario.docente)
    horario: Horario[]

    @OneToMany(()=>DireccionGrupo, (direccionGrupo) => direccionGrupo.docente)
    direccionGrupo: DireccionGrupo[]

    @OneToMany(()=>HistoricoDireccionGrupo, (historicoDireccionGrupo) => historicoDireccionGrupo.docente)
    his_direccionGrupo: HistoricoDireccionGrupo[]
}
