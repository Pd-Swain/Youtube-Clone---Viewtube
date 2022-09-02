import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-bar',
  templateUrl: './chips-bar.component.html',
  styleUrls: ['./chips-bar.component.css']
})
export class ChipsBarComponent implements OnInit {

  chips=[{name:"All"},{name:"Electronics"},{name:"Computers"},{name:"Mechanics"},{name:"Aeronautics"},{name:"Metallurgy"},]

  constructor() { }

  ngOnInit(): void {
  }

}
