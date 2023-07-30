import {Injectable} from "@angular/core";


export interface UserProfile {
  name: string;
  birthdate: string;
  gender: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  profile: UserProfile = null;

  fetchProfileData(id: String) {
    //return Api
  }


}
