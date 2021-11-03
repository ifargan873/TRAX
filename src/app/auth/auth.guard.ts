import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree } from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       this.authService
       .getAuthStatusLisntener()
       .subscribe(response => {
         this.isAuth = response.status
       })

    if(!this.isAuth)
    {
      this.router.navigate(['/login'])
    }
    return this.isAuth;
  }

}
