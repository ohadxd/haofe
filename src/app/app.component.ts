import {animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {delay, Subject } from 'rxjs';
import {fadeEffect, openDoorLeft, openDoorRight, transformLeft, transformRight, transformRoll } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
    fadeEffect,
    transformRight,
    transformLeft,
    openDoorRight,
    openDoorLeft,
    transformRoll
  ]
})
export class AppComponent {
  title = 'Haofe';
  fade: boolean = false;
  header_var:  boolean = false;
  leave: boolean = false;
  doors: boolean = false

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
