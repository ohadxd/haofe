import {Component, OnInit} from '@angular/core';

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
  constructor() {

  }

  ngOnInit(): void {
  }

  expandFoot($event: any) {
    console.log("recived command to expand");
    this.expandFooter = $event.value;
  }
}
export class SidenavAutosizeExample {
  showFiller = false;
}
