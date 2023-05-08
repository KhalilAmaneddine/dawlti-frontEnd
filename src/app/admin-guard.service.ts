import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { JwtBody } from './jwt-body';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router: Router, private cookie: CookieService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.cookie.get('token');
    if(token) {
      const decodedToken = jwt_decode<JwtBody>(token);
      if(decodedToken.authorities == 'ROLE_ADMIN')
      return true;
    } 
     return false;
  }
}
