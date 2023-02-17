import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared-modules/shared.module';


const productsRoutes: Routes = [{
  path: '',
  component: ProductsComponent,
  // canActivate: [AuthGuard],
  children: [
    {
      path:'',
      component: ProductListComponent
    },
    {path: ':id', component: ProductDetailsComponent},
    {path: 'new', component: ProductEditComponent},
    {path: ':id/edit', component: ProductEditComponent}]
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productsRoutes),
  ]
})
export class ProductsModule { }
