import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {UpdateProfileComponent} from "./update-profile/update-profile.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "../auth/auth.guard";
import { ProfilesComponent } from "./profiles.component";


const routes: Routes = [{
  path: '',
  component: ProfilesComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path:':id',
      component: ProfileComponent,
      pathMatch: 'full'
    },
    {
      path: ':id/edit',
      component: UpdateProfileComponent,
      pathMatch: 'full'
    }
  ]
}

];
@NgModule({
  declarations: [
    ProfilesComponent,
    ProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProfilesComponent,
    ProfileComponent,
    UpdateProfileComponent,
    RouterModule
  ]
})

export class ProfilesModule {

}
