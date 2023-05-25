import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ProductData } from 'src/app/shared/interfaces';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  //demmy data
  products: ProductData[];
  favoriteIcon: string = "favorite_border";
  isAdmin: boolean = false;
  constructor(private productService: ProductsService, private renderer2: Renderer2,  private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.productService.fetchProducts('cakes');
    this.productService.productsList.subscribe(data => {
      this.products = data.slice();
    })
  }
  colorFavIcon(e: any) {
    this.renderer2.setProperty(e.target,'innerText', 'favorite');
    this.renderer2.setStyle(e.target,'color', 'red');

    console.log(e)
  }
  uncolorFavIcon(e: any) {
    this.renderer2.setProperty(e.target,'innerText', 'favorite_border');
    this.renderer2.setStyle(e.target,'color', 'white');
  }
  colorShareIcon(e: any) {
    this.renderer2.setStyle(e.target,'color', '#0581cc');
  }
  uncolorShareIcon(e: any) {
    this.renderer2.setStyle(e.target,'color', 'white');
  }
  colorEditIcon(e: any) {
    this.renderer2.setStyle(e.target,'color', 'gray');

    console.log(e)
  }
  uncolorEditIcon(e: any) {
    this.renderer2.setStyle(e.target,'color', 'white');
  }

  onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
