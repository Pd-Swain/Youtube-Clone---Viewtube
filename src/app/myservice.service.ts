import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  isLoggedin: boolean = false;

  userName:string="";
  password:string="";

  constructor() { }

  checkLogin(){
    return this.isLoggedin;
  }

  login(){
    this.isLoggedin=true;
  }

  comparing(userName:string,password:string){
    this.userName=userName;
    this.password=password;
  }
}
