import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',Validators.required);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private router: Router, private loginFormValue: MyserviceService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email.value=='' && this.password.value==''){
      alert('You are not registered yet, Please Do Register First')
    }else if(this.email.value==this.loginFormValue.userName && this.password.value==this.loginFormValue.password){
      this.router.navigate(['studio/studio-upload']);
      this.loginFormValue.isLoggedin=true;
    }else{
      alert("Credentials are incorrect or you may not registered with us.")
    }
  }

  register(){
    this.router.navigate(['credential/register'])
  }

}
