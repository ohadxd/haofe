import { Component, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  isAdmin: boolean = true;


  constructor(private renderer2: Renderer2,  private route: ActivatedRoute,
              private router: Router) {
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
