import { Component, Input } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footExpand: boolean = false;
  constructor(private shared: SharedService) {
  }

}
