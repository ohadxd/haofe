import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMatModule } from "./angular-mat.module";
import { EditorModule } from 'primeng/editor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMatModule,
    EditorModule,
    FormsModule,

  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    AngularMatModule,
    EditorModule,
    FormsModule,
    HttpClientModule

  ],
})
export class SharedModule { }
