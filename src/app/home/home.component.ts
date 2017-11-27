import { Component, OnInit } from '@angular/core';
import { AuthService } from "../AuthService/Auth.Service";
// import { NotificationsService } from 'app/notifications/notifications.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "../notifications/notifications.component";

// import { AuthService } from "app/AuthService/Auth.Service";
// import { User } from "app/ModelService/User";
import { Job } from "../ModelService/Job";
import { DbService } from "../DbService/DbService";
import { Applicant } from "../ModelService/Applicant";

@Component({
  moduleId: module.id,  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser  :  string = "";
  currentUserId  :  number = null;
  attachedApplicant : string [];
  LockedApplicant : Applicant [] = [];

  ApplicantToSummary : Applicant;
SummaryMode : boolean  = false;

  ngOnInit() {

      if(localStorage.getItem('AfterLogin'))
      this.Notify.showNotification('top','right','You have logged successfully', 2);      

    setTimeout(()=>{    
      localStorage.removeItem('AfterLogin')
     },3000);
      console.log(localStorage.getItem("un"));
      this.currentUser = localStorage.getItem("un");
      this.getLockedUsers();
      
  }



  constructor(public AuthService : AuthService , private Notify : NotificationsService ,private  route : ActivatedRoute, private Service: DbService) {
  }




getLockedUsers() {
  let req = this.Service.Get("Reviews");
  req.subscribe(rsp => {
    this.LockedApplicant = rsp.json();  
    console.log(this.LockedApplicant);  
    });
  }

  ToSummary(applicant : Applicant)
  {
  this.ApplicantToSummary = applicant;
  console.log("to Sum",this.ApplicantToSummary);
  this.SummaryMode=true;
  }

  onAppearance(actionMode : string)
  {
     this.SummaryMode=false;

     if(actionMode == "success")
     this.Notify.showNotification('top','right','Summary Action is successfull', 2);

     this.ngOnInit();

  }







}
