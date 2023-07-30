import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent implements OnInit {

  constructor(private router: Router, private user: AuthService) {

  }
  ngOnInit(): void {
    
  }
}
