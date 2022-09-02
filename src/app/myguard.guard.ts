import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {

  constructor(private myLogin:MyserviceService,private router:Router){}

  canActivate() {
    if(this.myLogin.isLoggedin){
      return this.myLogin.isLoggedin;
    }else{
      this.router.navigate(['credential/login']);
      return false;
    }
  }
  
}
