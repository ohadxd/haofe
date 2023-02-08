import {NgModule} from "@angular/core";
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldControl} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import {MatSliderModule} from "@angular/material/slider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ObserveVisibilityDirective } from './observe-visibility.directive';


@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatRippleModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatRippleModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule


  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
})

export class AngularMatModule {

}
