import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DividaTecnicaComponent } from './divida-tecnica/divida-tecnica.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'projeto', component: LayoutComponent},
  {path:'divida-tecnica', component: LayoutComponent },
  {path:'dashboard', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
