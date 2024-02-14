import { Empresa } from "src/empresa/entities/empresa.entity";
import { ModeloPedagogico } from "src/modelo_pedagogico/entities/modelo_pedagogico.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("relacion_modelo_pedagogico")
export class RelacionModeloPedagogico {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>ModeloPedagogico, (modelosPedagogico)=>modelosPedagogico.relacionModeloPedagogico)
    modelosPedagogico: ModeloPedagogico;

    @ManyToOne(()=> Empresa, (empresas)=>empresas.relacionModeloPedagogico)
    empresa: Empresa;
}
