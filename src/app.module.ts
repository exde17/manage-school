import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ModEstudianteModule } from './mod-estudiante/mod-estudiante.module';
import { EmpresaModule } from './empresa/empresa.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { SectorModule } from './sector/sector.module';
import { ComunaModule } from './comuna/comuna.module';
import { BarrioModule } from './barrio/barrio.module';
import { CorregimientoModule } from './corregimiento/corregimiento.module';
import { VeredaModule } from './vereda/vereda.module';
import { TipoSectorModule } from './tipo_sector/tipo_sector.module';
import { TipoEmpresaModule } from './tipo_empresa/tipo_empresa.module';
import { ModeloPedagogicoModule } from './modelo_pedagogico/modelo_pedagogico.module';
import { SedeModule } from './sede/sede.module';
import { NivelEducativoModule } from './nivel_educativo/nivel_educativo.module';
import { AreaModule } from './area/area.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { GradoModule } from './grado/grado.module';
import { HorarioModule } from './horario/horario.module';
import { GrupoModule } from './grupo/grupo.module';
import { PersonaModule } from './persona/persona.module';
import { DocenteModule } from './docente/docente.module';
import { CategoriaFuncionarioModule } from './categoria_funcionario/categoria_funcionario.module';
import { DireccionGrupoModule } from './direccion_grupo/direccion_grupo.module';
import { HistoricoDireccionGrupoModule } from './historico_direccion_grupo/historico_direccion_grupo.module';
import { AcudienteModule } from './acudiente/acudiente.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ModEstudianteModule,
    EmpresaModule,
    DepartamentoModule,
    CiudadModule,
    SectorModule,
    ComunaModule,
    BarrioModule,
    CorregimientoModule,
    VeredaModule,
    TipoSectorModule,
    TipoEmpresaModule,
    ModeloPedagogicoModule,
    SedeModule,
    NivelEducativoModule,
    AreaModule,
    AsignaturaModule,
    GradoModule,
    HorarioModule,
    GrupoModule,
    PersonaModule,
    DocenteModule,
    CategoriaFuncionarioModule,
    DireccionGrupoModule,
    HistoricoDireccionGrupoModule,
    AcudienteModule,
  ],
})
export class AppModule {}
