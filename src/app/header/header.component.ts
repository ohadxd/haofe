import { Component, HostListener } from '@angular/core';
// import { closeMenu } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations : [
    // closeMenu
  ]
})
export class HeaderComponent {
  toggle: boolean = false;
  isScrolled: boolean = true;

toggleMenu() {
  this.toggle = !this.toggle
  console.log(this.toggle);
}

  @HostListener("window:wheel", ["$event"])
  onWindowScroll(event: any) {
    if (event.deltaY < -120) {
      this.isScrolled = false;
    } else if (event.deltaY > 120) {
      this.isScrolled = true;
    }
 }
}
