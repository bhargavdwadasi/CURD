import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from "./backend.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private _myservice: BackendService, private router: Router) {} 
  canActivate(){
    if(!this._myservice.checkLogin()){
        this.router.navigate(['/']);
    }
    return this._myservice.checkLogin();
  }
  
}
