import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeuPerfilComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule
  ], exports:[
    MeuPerfilComponent
  ]
})
export class ConfigModule { }
