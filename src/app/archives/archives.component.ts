import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import { Applicant } from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "app/AuthService/Auth.Service";
import { Job } from "../ModelService/Job";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  Jobs: Job [] = [];
  AddJob= false;
  Skills = ["","",""] ;
  EditMode : boolean = false;
  ngOnInit() {
    this.GetApplicants();
    this.GetJobs();
    
  }
  constructor(private Service: DbService, private Notify : NotificationsService,public AuthService: AuthService) { }
  AllApplicants: any[];
  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
      console.log(this.AllApplicants);
    });
  }
  OnAppearance(CloseForm:string)
  {
    this.EditMode = false;
    if(CloseForm == 'success')
    this.Notify.showNotification('top','right','Aplicant Update Succesfully', 2);    
  }
  GetJobs() {
    this.Skills =[];
  let req = this.Service.Get("Jobs")
  req.subscribe(rsp => {
    this.Jobs = rsp.json();
    console.log(this.Jobs);
  });
}
}
