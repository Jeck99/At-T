import { Component, OnInit, Input, Output } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "../DbService/DbService";
import { Job } from "../ModelService/Job";
import { Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [DbService]
})
export class JobsComponent {


  constructor(private Service: DbService, private router: Router) { this.GetJobs(); }
  Jobs: Job[] = [];
  AddJob = true;
  Skills = ["", "", ""];
  EditMode: boolean = false;
  hiddenJob: boolean = false;
  idCompare: number;
  hiddenJobTru(numm: number) {
    this.idCompare = numm;
    this.hiddenJob = true;
  }
  hiddenJobfals() {
    this.idCompare = 0;
    this.hiddenJob = false;
  }

  GetJobs() {
    this.Skills = [];
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
  AddJobForm() {
    this.AddJob = !this.AddJob;
    console.log(this.AddJob)
  }
  @Output() JobToEdit: Job = new Job("", "", "");
  @Output() IsVisible: boolean = false;
  PrepareForEdit(job: Job) {
    // this.EditMode= true;
    this.JobToEdit = job;
    this.IsVisible = true;
    console.log(this.IsVisible);
    console.log(this.JobToEdit)
  }
  // hideErrorMsg() {

  // }
}

