import { Component, OnInit } from '@angular/core';
import { AuthService } from "../AuthService/Auth.Service";
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "../notifications/notifications.component";
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
  constructor(public AuthService: AuthService, private Notify: NotificationsService, private route: ActivatedRoute, private Service: DbService) {
  }
  currentUser: string = "";
  currentUserId: number = null;
  attachedApplicant: string[];
  LockedApplicant: Applicant[] = [];

<<<<<<< HEAD
  ApplicantToSummary: Applicant;
  SummaryMode: boolean = false;

  ngOnInit() {

    if (localStorage.getItem('AfterLogin'))
      this.Notify.showNotification('top', 'right', 'You have logged successfully', 2);
=======
  currentUser  :  string = "";
  currentUserId  :  number = null;
  attachedApplicant : string [];
  LockedApplicant : Applicant [] = [];

  ApplicantToSummary : Applicant;
SummaryMode : boolean  = false;
AfterInterview : Date = new Date();

  ngOnInit() {
this.AfterInterview =new Date();
      if(localStorage.getItem('AfterLogin'))
      this.Notify.showNotification('top','right','You have logged successfully', 2);      
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb

    setTimeout(() => {
      localStorage.removeItem('AfterLogin')
    }, 3000);
    this.currentUser = localStorage.getItem("un");
    this.getLockedUsers();
  }

<<<<<<< HEAD
  getLockedUsers() {
    let req = this.Service.Get("Reviews");
    req.subscribe(rsp => {
      this.LockedApplicant = rsp.json();
=======


  constructor(public AuthService : AuthService , private Notify : NotificationsService ,private  route : ActivatedRoute, private Service: DbService) {
  }



getLockedUsers() {
  let req = this.Service.Get("Reviews");
  req.subscribe(rsp => {
    this.LockedApplicant = rsp.json();  
    console.log(this.LockedApplicant);  
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
    });
  }

  ToSummary(applicant: Applicant) {
    this.ApplicantToSummary = applicant;
    this.SummaryMode = true;
  }

<<<<<<< HEAD
  onAppearance(actionMode: string) {
    this.SummaryMode = false;
    if (actionMode == "success")
      this.Notify.showNotification('top', 'right', 'Summary Action is successfull', 2);
=======
  onAppearance(actionMode : string)
  {
     this.SummaryMode=false;

     if(actionMode == "success")
     this.Notify.showNotification('top','right','Summary Posted successfull', 2);
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb

    this.ngOnInit();

  }
}
