import { Component, OnInit } from '@angular/core';
import { AuthService } from "../AuthService/Auth.Service";
// import { NotificationsService } from 'app/notifications/notifications.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "../notifications/notifications.component";

// import { AuthService } from "app/AuthService/Auth.Service";
// import { User } from "app/ModelService/User";
import { Job } from "../ModelService/Job";
import { DbService } from "app/DbService/DbService";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: string = "";
  currentUserId: number = null;
  attachedApplicant: string[];
  JobRecruiters: any[] = [];
  Jobs: any[];
  JobsByRecruiter: Job[] = [];

  constructor(public AuthService: AuthService, private Notify: NotificationsService, private route: ActivatedRoute, private Service: DbService) {
    // debugger;
    if (localStorage.getItem('AfterLogin')) {
      this.Notify.showNotification('top', 'right', 'You have logged successfully', 2);
    }
    
    this.GetAttachedApplicant();
    this.GetJobRecruiters();
  }
  GetAttachedApplicant() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.attachedApplicant = rsp.json().filter(Applicant => Applicant.LockedBy === this.currentUser);
      console.log(this.attachedApplicant);
    });
  }

  GetJobRecruiters() {
    let req = this.Service.Get("JobRecruiters")
    req.subscribe(rsp => {
      this.JobRecruiters = rsp.json().filter(Recruiter => Recruiter.RecruiterId === this.currentUserId);
      let req = this.Service.Get("Jobs")
      req.subscribe(rsp => {
        this.Jobs = rsp.json();
        this.JobRecruiters.forEach(element => {
   if(undefined!=(this.Jobs.find(x => x.Id === element.JobId))){
          this.JobsByRecruiter.push(this.Jobs.find(x => x.Id === element.JobId));}
          console.log("JobsByRecruiter" ,this.JobsByRecruiter);
        });
      });
    }
    )
  }

  ngOnInit() {
    console.log(localStorage.getItem("un"));
    this.currentUser = localStorage.getItem("un");
    this.currentUserId = +localStorage.getItem("uid");
    this.AuthService.RoleCheck();
  }
<<<<<<< HEAD

  UseNotifyService() {
    this.Notify.showNotification('bottom', 'left', 'Notify Control', 2);
  }
=======
>>>>>>> parent of e3d7bcd5... After pull1
}
