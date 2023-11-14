import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DividaTecnicaComponent } from './divida-tecnica/divida-tecnica.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

const routes: Routes = [
  {path:'servicos', component: LayoutComponent, children:[
    {path:'projeto', component: ProjetoComponent},
    {path:'projeto/:id', component: ProjetoComponent},
    {path:'divida-tecnica', component: DividaTecnicaComponent },
    {path:'divida-tecnica/:id', component: DividaTecnicaComponent },
    {path:'fale-conosco', component: FaleConoscoComponent},
    {path:'relatorios-projetos', component: RelatoriosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
