import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "app/DbService/DbService";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[DbService]
})
export class JobsComponent{

  constructor(private http: Http,private Service: DbService) {this.GetJobs(); }
  Jobs: any[];
  AddJob= true;
  Skills = ["","",""] ;

    GetJobs() {
      this.Skills =[];
    let req = this.Service.Get("Jobs")
    req.subscribe(rsp => {
      this.Jobs = rsp.json();
      for(let i = 0;i<this.Jobs.length;i++)
      {      
       this.Skills.push(this.Jobs[i].Skillset.split(','));
      }
    });
  }

  AddJobForm()
  {
   this.AddJob=!this.AddJob;
   console.log(this.AddJob)
  }
}

