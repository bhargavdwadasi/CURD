import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, NgForm, Validators, FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';

//service
import { BackendService } from "../../backend.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide:boolean = true;
  result;
  msg:string;
  constructor(private fb: FormBuilder, private router: Router,private _myservice: BackendService) { 
    this.loginForm = this.fb.group({
      email: ['' , [Validators.required , Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    // console.log(this.loginForm.value);
    this.result = this._myservice.login(this.loginForm.value);
    console.log(this.result);

    if(this.result){
      localStorage.setItem('token', 'tokenabcdefghijklmnopqrstuvwxyz');
      this.router.navigate(['/dashboard']);
    }
    else{
      this.msg = "Invalid Credentials";
    }
  }

  ngOnInit(): void {
  }

}
