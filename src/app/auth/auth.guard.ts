import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,  CanActivate, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import {map, take} from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}
  // Check if the user is logged in
    canActivate(route: ActivatedRouteSnapshot,
         router: RouterStateSnapshot
         ):
         boolean | Promise<boolean> |  Observable<boolean | UrlTree> {
                                   //take last User from the BSubject

            return this.auth.user.pipe(take(1), map(user => {
                  const isAuth = !!user;
                  if(isAuth) {
                      return true;
                  } else {
                      return this.router.createUrlTree(['/auth']);
                    }
             }));
          }
}
