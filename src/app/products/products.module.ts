import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared-modules/shared.module';


const productsRoutes: Routes =
  [{
  path: '',
  component: ProductsComponent, children: [
    { path:'', component: ProductListComponent },
    { path: 'new', component: ProductEditComponent },
    { path: ':id', component: ProductDetailsComponent },
    { path: ':id/edit', component: ProductEditComponent }
    ]}
];
@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ],
  imports: [
    SharedModule,
    RouterModule.forChild(productsRoutes),
  ],
  exports: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ]
})
export class ProductsModule { }
