import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { ListCuestionariosRoutingModule } from './list-cuestionarios-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// Componentes
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './respuesta-cuestionario/respuesta-cuestionario.component';


@NgModule({
  declarations: [
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent
  ],
  imports: [
    CommonModule,
    ListCuestionariosRoutingModule,
    SharedModule
  ]
})
export class ListCuestionariosModule { }
