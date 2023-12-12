import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { TemplateModule } from './template/template.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { ServicosModule } from './servicos/servicos.module';
import { ProjetoService } from './service/projeto.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';
import { HomeModule } from './home/home.module';
import { ConfigModule } from './config/config.module';
import { NgChartsModule } from 'ng2-charts';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './service/auth.service';
import { DashboardService } from './service/dashboard.service';
import { DividaTecnicaService } from './service/divida-tecnica.service';
import { RedmineService } from './service/redmine.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    TemplateModule,
    FontAwesomeModule,
    FormsModule,
    ServicosModule,
    HttpClientModule,
    HomeModule,
    ConfigModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    ProjetoService,
    DashboardService,
    DividaTecnicaService,
    RedmineService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


