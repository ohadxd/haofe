import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMatModule } from "./angular-mat.module";
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../loading.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMatModule,
    FormsModule,
    LoadingComponent

  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    AngularMatModule,
    FormsModule,
    HttpClientModule,
    LoadingComponent
  ],
})
export class SharedModule { }
