import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Checkdate } from 'src/check-date';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  constructor() { }

  selectedstartdate:Date=new Date();
  private checkdate =new Checkdate()

  Videocreate = new FormGroup({

    url: new FormControl('',Validators.required),

    title : new FormControl('',[Validators.required,Validators.maxLength(120)]),

    description : new FormControl('',Validators.required),

    duration : new FormControl('', Validators.required),

    channelTitle : new FormControl('',Validators.required),

  })

  submitdata(){
    alert('records are added sucessfully')
   }

  ngOnInit(): void {
  }

}
