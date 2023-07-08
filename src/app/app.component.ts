import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here

  ]
})
export class AppComponent implements OnInit{
  expandFooter: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  expandFoot($event: any) {
    console.log("recived command to expand");
    this.expandFooter = $event.value;
  }
}
export class SidenavAutosizeExample {
  showFiller = false;
}
