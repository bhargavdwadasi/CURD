import { Component, OnInit } from '@angular/core';
import { BackendService } from "../backend.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;
  constructor(private _myservice: BackendService,private router: Router) { }

  ngOnInit(): void {

  }



}
