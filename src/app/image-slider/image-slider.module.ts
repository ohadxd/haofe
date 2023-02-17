import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component';
import { SharedModule } from '../shared/shared-modules/shared.module';



@NgModule({
  declarations: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    // SharedModule
  ],
  exports: [
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
