import {Component} from "@angular/core";

@Component({
  selector: 'app-loading',
  styleUrls: ['./loading.component.scss'],
  template: `<div class="h-100 w-100 position-absolute bg bg-opacity-75 bg bg-dark d-flex flex-wrap align-content-center justify-content-center"> <div class="lds-ring"><div>
  </div><div></div><div></div><div></div></div></div>`,
  standalone: true
})

export class LoadingComponent {

}
