import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "../DbService/DbService";
import { Job } from "../ModelService/Job";
import { Router } from "@angular/router";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[DbService]
})
export class JobsComponent implements OnInit {

  ngOnInit() {
    this.GetJobs();
          }

  constructor(private Service: DbService , private router : Router) { }
  Jobs: Job [] = [];
  AddJob= false;
  Skills = ["","",""] ;
  EditMode : boolean = false;
  
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

}

