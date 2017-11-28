import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "../DbService/DbService";
import { Job } from "../ModelService/Job";
import { Router } from "@angular/router";
import { AuthService } from "app/AuthService/Auth.Service";
import { NotificationsService } from "../notifications/notifications.component";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [DbService]
})
export class JobsComponent implements OnInit {
  p: number = 1;
  UserOn: string = "";
  ngOnInit() {
    this.GetJobs();
    this.UserOn = localStorage.getItem("un");
  }

  constructor(private Service: DbService, private router: Router, public AuthService: AuthService, private Notify: NotificationsService) { }
  Jobs: Job[] = [];
  AddJob = false;
  Skills = ["", "", ""];
  EditMode: boolean = false;
  JobDetailsMode: boolean = false;
  JobToView: Job;

  CheckRelation(job: Job) {
    if (job.Recruiters.find(Jr => Jr.UserName == this.UserOn))
      return true;
    else
      return false;
  }

  ViewJobDetails(Jobview: Job) {
    this.JobToView = Jobview;
    this.JobDetailsMode = true;
  }

  GetJobs() {
    this.Skills = [];
    let req = this.Service.Get("Jobs")
    req.subscribe(rsp => {
      this.Jobs = rsp.json();
    });
  }

  AddJobForm() {
    this.AddJob = !this.AddJob;
  }

  JobToEdit: Job = new Job("", "", "");

  PrepareForEdit(job: Job) {
    this.EditMode = true;
    this.JobToEdit = job;
  }

  onAppearance(CloseForm: boolean) {
    this.EditMode = CloseForm;
  }

  onAppearanceDetails(event) {
    this.JobDetailsMode = false;
  }

  onPostingJob(CloseForm: string) {
    this.AddJob = false;
    if (CloseForm == 'success')
      this.Notify.showNotification('top', 'right', 'Aplicant Update Succesfully', 2);
  }
}