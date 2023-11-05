import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedmineRoutingModule } from './redmine-routing.module';
import { ApiRedmineComponent } from './api-redmine/api-redmine.component';


@NgModule({
  declarations: [
    ApiRedmineComponent
  ],
  imports: [
    CommonModule,
    RedmineRoutingModule
  ]
})
export class RedmineModule { }
