import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { NgChartsModule } from 'ng2-charts'; // Importe o ChartsModule


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule
  ], exports:[
   DashboardComponent,
    InicioComponent,
  ]
})
export class HomeModule { }
