import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: number[] = [1,2,3,4,5,6,7,5,4,3,5,6];
  favoriteIcon: string = "favorite_border";
  constructor(private renderer2: Renderer2) {
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
}
