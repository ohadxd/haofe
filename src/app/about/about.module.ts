import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from 'primeng/api';
import {RouterModule, Routes } from '@angular/router';


const aboutRoutes: Routes =
  [{
    path: '', component: AboutComponent
  }];
@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule { }
