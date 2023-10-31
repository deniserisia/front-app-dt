import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ], exports:[
    DashboardComponent,
    InicioComponent
  ]
})
export class HomeModule { }
