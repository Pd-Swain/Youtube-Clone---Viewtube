import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';
import { MyserviceoneService } from 'src/app/myserviceone.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(12)])
  confirmPassword = new FormControl('',Validators.required);

  emailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  passwordErrorMessage(){
    if(this.password.hasError('required')){
      return "Can't be left blank";
    }else if(this.password.value.length<8){
      return 'Password should be atleast contain 8 character'
    }else if(this.password.value.length>12){
      return 'Password should not be exceed than 12 character'
    }else{
      return ''
    }
  }

  confirmpasswordErrorMessage(){
    if(this.password.hasError('required')){
      return "Can't be left blank";
    }else if(this.password.value==this.confirmPassword.value){
      return "matched"
    }else{
      return 'Not Matching'
    }
  }

  constructor(private registerFormValue: MyserviceService, private router: Router, private live: MyserviceoneService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['credential/login'])
  }

  register(){
    this.registerFormValue.comparing(this.email.value,this.password.value);
    this.email.reset();
    this.password.reset();
    this.confirmPassword.reset();
  }

  isChecked(){
    if(this.live.isChecked==false){
      this.live.isChecked=true;
    }else{
      this.live.isChecked=false;
    }
  }

}
