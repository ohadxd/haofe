import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class ProfileCard {
    name: string;
    profileImg: string;
    gender: string;
    birthdate?: string;
    about?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})



export class ProfileComponent implements OnInit {

isIgnored: boolean = false;
isFriend: boolean = true;
constructor(private route: ActivatedRoute) {
}
  ngOnInit(): void {

  }

profileCard: ProfileCard = null;

ignore() {
  
}
unIgnore() {

}
addFriend() {

}
removeFriend() {
  
}
getProfile() {
const id = this.route.snapshot.paramMap.get('id');
}
}

