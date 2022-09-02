import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkdate } from 'src/check-date';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  constructor() { }

  private checkdate =new Checkdate();

  livestreamdata = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(30)]),
    startDate : new FormControl('',this.checkdate.Datecheck()),
    starttime :new FormControl('',Validators.required),
    enddate: new FormControl('',this.checkdate.checkEndDate()),
    endtime: new FormControl('',Validators.required)
  })

  submitdata(){
     alert('records are added sucessfully');
  }

  title = new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(30)])
  startDate = new FormControl('',this.checkdate.Datecheck())
  time = new FormControl('',Validators.required)

  titleErrorMessage() {
    if(this.title.hasError('required')){
      return 'You must enter the title';
    }else if(this.title.value.length<12){
      return 'Title should be atleast 12 characters';
    }else if(this.title.value.length>30){
      return 'Title Should be less than 30 characters';
    }else{
      return '';
    }
  }

  startDateErrorMessage(){
    if(this.startDate.hasError('required')){
      return 'You must enter the Start Date'
    }else if(this.startDate.invalid){
      return 'Kindly put the current date onwards'
    }else{
      return ''
    }
  }

  timeErrorMessage(){
    if(this.time.hasError('required')){
      return 'You must enter the Time'
    }else{
      return ''
    }
  }

  ngOnInit(): void {
  }

}
