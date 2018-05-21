import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
regs : any ={};
  constructor(private _usd : UserDataService) { }
  	SaveDataFn(){
  		this. _usd.registerService(this.regs);
  		console.log(this.regs);
  	}
  ngOnInit() {
  }

}
