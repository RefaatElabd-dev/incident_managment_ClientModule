import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
         CanActivate,
         Router,
         RouterStateSnapshot,
         UrlTree } from "@angular/router";


import { Observable } from "rxjs";
import { AuthService } from "./auth.Service";

@Injectable()
export class AuthGurd implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean> {
        return this.authService.isAuthenticated().then(
            (isAuthenticated: boolean) => {
                if(isAuthenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                }
                return false;
            }
        );
    }

}