import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMatModule } from "./angular-mat.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMatModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    AngularMatModule
  ]
})
export class SharedModule { }
