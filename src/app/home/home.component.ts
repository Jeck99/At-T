import { Component, OnInit } from '@angular/core';
import { AuthService } from "../AuthService/Auth.Service";
// import { AuthService } from "app/AuthService/Auth.Service";
// import { User } from "app/ModelService/User";

@Component({
  moduleId: module.id,  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser  :  string = "";

  constructor(public AuthService : AuthService) {
  }

  ngOnInit() {
      console.log(localStorage.getItem("un"));
      this.currentUser = localStorage.getItem("un");
      this.AuthService.RoleCheck();
  }




}
