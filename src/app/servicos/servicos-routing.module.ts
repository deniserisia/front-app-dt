import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DividaTecnicaComponent } from './divida-tecnica/divida-tecnica.component';
import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = [
  {path:'serviços', component: LayoutComponent, children:[
    {path:'projeto', component: ProjetoComponent},
    {path:'projeto/:id', component: ProjetoComponent},
    {path:'divida-tecnica', component: DividaTecnicaComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
