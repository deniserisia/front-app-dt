import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { DividaTecnicaComponent } from './divida-tecnica/divida-tecnica.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProjetoComponent,
    DividaTecnicaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
