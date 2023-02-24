import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlowScrollDirective } from './shared/directives/slow-scroll.directive';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { ObserveVisibilityDirective } from './shared/directives/observe-visibility.directive';
import { SharedModule } from './shared/shared-modules/shared.module';
import { AppRoutingModule } from './routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ImageSliderModule } from './image-slider/image-slider.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ObserveVisibilityDirective,
    ParallaxDirective,
    SlowScrollDirective,
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    MainComponent,
    HeaderComponent,
    PostsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ImageSliderModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
