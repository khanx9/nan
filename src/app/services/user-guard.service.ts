import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class UserGuardService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (!this.authService.isLoggedIn()) {
        return true;
      } else {
          this.router.navigate(['/'])
        return false;
      }
    }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      console.log(this.canActivate(route, state))
        return this.canActivate(route, state);
    }
}
