import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {

  constructor(private _http : HttpClient) { }

  loginService(data) {
    console.log("hello", data);
    this._http.post("http://localhost:2000/login", data)
    .subscribe(function(data1){
      console.log(data1);
    });
  }

	registerService(data) {
    console.log("hiiiii", data);
    this._http.post("http://localhost:2000/registration", data)
    .subscribe(function(data1){
      console.log(data1);
    });
  }
  

  
}
