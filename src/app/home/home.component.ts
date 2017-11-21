import { Component, OnInit } from '@angular/core';
import { AuthService } from "../AuthService/Auth.Service";
// import { NotificationsService } from 'app/notifications/notifications.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "../notifications/notifications.component";

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

  constructor(public AuthService : AuthService , private Notify : NotificationsService ,private  route : ActivatedRoute) {
  // debugger;
    if(localStorage.getItem('AfterLogin'))
    {
      this.Notify.showNotification('top','right','You have logged successfully', 2);      
    }
    
  }

  ngOnInit() {
      console.log(localStorage.getItem("un"));
      this.currentUser = localStorage.getItem("un");
      this.AuthService.RoleCheck();
  }

  UseNotifyService()
  {
    this.Notify.showNotification('bottom','left','Notify Control',2);
  }
}
