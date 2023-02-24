import { Component } from '@angular/core';
import { fadeEffect, openDoorLeft, openDoorRight, transformLeft, transformRight, transformRoll } from '../animations';
import { SlideInterface } from '../image-slider/slide-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:    [
    fadeEffect,
    transformRight,
    transformLeft,
    openDoorRight,
    openDoorLeft,
    transformRoll
  ]
})
export class MainComponent {
  title = 'Haofe';
  fade: boolean = false;
  header_var:  boolean = false;
  leave: boolean = false;
  doors: boolean = false
  showFiller: boolean = false;
  slides: SlideInterface[] = [

    {url: 'assets/img2.webp', title: 'bakery'},
    {url: 'assets/img3.webp', title: 'bakery'},
    {url: 'assets/img4.webp', title: 'bakery'},
    {url: 'assets/img5.webp', title: 'bakery'}

  ];
  fadeAnimation(bool: boolean) {
    this.fade = bool;
  }

  openAnimation(bool: boolean) {
    this.leave = bool;
    if (bool) {

    }
    console.log(this.leave)
  }
  doorsAnimation(bool: boolean) {
    this.doors = bool;
  }

}
