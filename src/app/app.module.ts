import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMatModule } from './shared/angular-material.module';
import { ObserveVisibilityDirective } from './shared/observe-visibility.directive';
import { ParallaxDirective } from './shared/parallax.directive';
import { SlowScrollDirective } from './shared/directives/slow-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ObserveVisibilityDirective,
    ParallaxDirective,
    SlowScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
