import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceoneService } from './myserviceone.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardoneGuard implements CanActivate {

  constructor(private one:MyserviceoneService){}

  canActivate() {
    return this.one.isChecked;
  }
  
}
