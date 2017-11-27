import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../AuthService/Auth.Service";

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private router: Router, private Auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('Session')) {
            // logged in so return true
            if (!this.Auth.Role) {
                this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}