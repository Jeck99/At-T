import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "../DbService/DbService";
import { Job } from "../ModelService/Job";
import { Router } from "@angular/router";
import { AuthService } from "app/AuthService/Auth.Service";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[DbService]
})
export class JobsComponent implements OnInit {
  p: number = 1;
  UserOn  : string = "";
  ngOnInit() {
    this.GetJobs();
    this.UserOn = localStorage.getItem("un");
}

  constructor(private Service: DbService , private router : Router, public AuthService : AuthService) { }
  Jobs: Job [] = [];
  AddJob= false;
  Skills = ["","",""] ;
  EditMode : boolean = false;
  JobDetailsMode : boolean = false;

  JobToView : Job;


  CheckRelation(job : Job)
  {
    if(job.Recruiters.find(Jr=>Jr.UserName == this.UserOn))
      {
        return true;
      }
     else
    {
          return false;
    }
   }
   ViewJobDetails(Jobview : Job)
  {   
    console.log(Jobview);
   this.JobToView = Jobview;
   this.JobDetailsMode = true;
  }
  
  DeleteJob(id:number)
  {
    let req = this.Service.delete("Jobs",id)
    req.subscribe(rsp => {
      alert("Deleted");
      this.ngOnInit();
    });
  }


    GetJobs() {
      this.Skills =[];
    let req = this.Service.Get("Jobs")
    req.subscribe(rsp => {
      this.Jobs = rsp.json();
      console.log(this.Jobs);
      // for(let i = 0;i<this.Jobs.length;i++)
      // {      
      //  this.Skills.push(this.Jobs[i].Skillset.split(','));
      // }
    });
  }

  AddJobForm()
  {
   this.AddJob=!this.AddJob;
  }

  JobToEdit : Job = new Job("","","");

PrepareForEdit(job : Job)
{
    this.EditMode= true;
    this.JobToEdit = job;
}
  
OnAppearance(CloseForm:boolean)
{
  this.EditMode=CloseForm;
}

OnAppearanceDetails(event){
  this.JobDetailsMode = false;
}


}

