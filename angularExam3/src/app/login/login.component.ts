import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
creds : any = {};
// ........_usd service name...................
  constructor(private _usd : UserDataService) { }

  ngOnInit() {
  }
  signFn(){
  	this. _usd.loginService(this.creds);
  	console.log(this.creds);
  }

}
