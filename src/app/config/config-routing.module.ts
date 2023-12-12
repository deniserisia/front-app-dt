import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AuthGuard } from '../service/auth.guard';

const routes: Routes = [
  {path:'configuracoes',  canActivate: [AuthGuard], component: LayoutComponent, children:[
    {path:'meu-perfil', component:MeuPerfilComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
