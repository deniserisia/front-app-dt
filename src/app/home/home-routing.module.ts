import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../service/auth.guard';

const routes: Routes = [
  {path:'home',  canActivate: [AuthGuard], component: LayoutComponent, children:[
    {path:'inicio', component: InicioComponent},
    {path:'dashboard', component: DashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
