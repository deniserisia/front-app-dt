import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { DividaTecnicaComponent } from './divida-tecnica/divida-tecnica.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjetoComponent,
    DividaTecnicaComponent,
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule
  ], exports:[
    ProjetoComponent,
    DividaTecnicaComponent,
  ]
})
export class ServicosModule { }
