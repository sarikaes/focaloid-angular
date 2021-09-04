import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  fname: string | undefined;
  email: string | undefined;
  address: string | undefined;
  phone: number | undefined;

  submitted=false


  constructor() { }

  ngOnInit(): void {
  }
submit(value: any){
  console.log(value)
  this.submitted=true
}
}