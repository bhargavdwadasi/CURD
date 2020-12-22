import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  email:string = "testing@gmail.com";
  password:string = "helloworld";
  constructor(private http:HttpClient) { }

  login(details){
    const email = details.email;
    const password = details.password;
    if(this.email == email){
      if(this.password == password){
        return true;
      }
      return false;
    }
    return false;
  }

  checkLogin(){
    const token = localStorage.getItem('token');

    if(token == "tokenabcdefghijklmnopqrstuvwxyz"){
      return true;
    }
    else{
      return false;
    }
  }
}
