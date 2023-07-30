import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations : [
    // closeMenu
  ]
})
export class HeaderComponent implements OnInit{
  toggle: boolean = false;
  isScrolled: boolean = false;
  mobile: boolean = false;

  ngOnInit() {
    if (window.screen.width <= 900) { // 768px portrait
      this.mobile = true;
    }
    else
      this.mobile = false;
  }
toggleMenu() {
  this.toggle = !this.toggle
  console.log(this.toggle);
}

// optional
 //  @HostListener("window:wheel", ["$event"])
 //  onWindowScroll(event: any) {
 //    if (event.deltaY < -120) {
 //      this.isScrolled = false;
 //    } else if (event.deltaY > 120) {
 //      this.isScrolled = true;
 //    }
 // }
}
