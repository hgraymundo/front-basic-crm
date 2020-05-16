import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  
  testAuth: boolean = false;

  constructor( private router: Router, public auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.testAuth = this.auth.isAuthenticated();
    if (this.testAuth) {
      return true;
    }
     // navigate to login page
     this.router.navigate(['/login']);
     // you can save redirect url so after authing we can move them back to the page they requested
     return false;
   }

}
