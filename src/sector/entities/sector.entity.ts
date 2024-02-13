import { Empresa } from "src/empresa/entities/empresa.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sector')
export class Sector {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(()=>Empresa, (empresa) => empresa.sector)
    empresa: Empresa[]
}
