import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared-modules/shared.module";
import {RouterModule, Routes} from "@angular/router";


const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthModule {

}
