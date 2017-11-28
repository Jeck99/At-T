import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import { Applicant } from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "app/AuthService/Auth.Service";
import { Job } from "../ModelService/Job";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  p: number;
  AllApplicants: Applicant = <Applicant>{};  
  Jobs: Job = <Job>{};
  AddJob = false;
  Skills = ["", "", ""];
  EditMode: boolean = false;
  ngOnInit() {
    this.GetApplicants();
    this.GetJobs();
  }
  settingsApp = {
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: true,

    actions: {
      delete: false,
      add: false,
      edit: false
    },
    pager: {
      display: true,
      perPage: 7,
    },
    columns: {

      Name: {
        title: 'Name',
        filter: true
      },
      Email: {
        title: 'Email',
        filter: true
      },
      Phone: {
        title: 'Phone',
        filter: true
      },
      Title: {
        title: 'Title',
        filter: true
      },
      Experience: {
        title: 'Experience',
        filter: true
      },
      Active: {
        title: 'Active',
        filter: true
      },
    },
  };
  settingsJob = {
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: true,

    actions: {
      delete: false,
      add: false,
      edit: false
    },
    pager: {
      display: true,
      perPage: 3,
    },
    columns: {
      // Id: {
      //   title: 'ID',
      // },
      Title: {
        title: 'Title',
        filter: true
      },
      Experience: {
        title: 'Experience',
        filter: true
      },

      Position: {
        title: 'Position',
        filter: true
      },
      Published: {
        title: 'Published',
        filter: true,
      },
    },
  };
  onCustomApp(event) {
    console.log(event.data)
    event.data.Active = true;
    this.AllApplicants.Active = event.data.Active;
    console.log(this.AllApplicants.Active)
    let req = this.Service.Edit("Applicants", event.data)
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
    });
  }
  
  onCustomJob(event) {
  //   console.log(event.data);
  //   this.Jobs.Published = event.data.Published;
  //   console.log(this.Jobs)
  //   let req = this.Service.Edit("Jobs", event.data)
  //   req.subscribe(rsp => {
  //     this.Jobs = rsp.json();
  //   });
  // this.ngOnInit();
  // }

  // onEditJobs(event) {
  //   console.log("On edit",event.data);

  }


  ///////////////////////////////////////////////////////////////////////
  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json().filter(App => App.Active == false);
      console.log("Not Active",this.AllApplicants);
    });
  }
  OnAppearance(CloseForm: string) {
    if (CloseForm == 'success')
      this.Notify.showNotification('top', 'right', 'Aplicant Update Succesfully', 2);
  }
  GetJobs() {
    this.Skills = [];
    let req = this.Service.Get("Jobs")
    req.subscribe(rsp => {
      this.Jobs = rsp.json().filter(job => job.Published == false);
      console.log(this.Jobs);
    });
  }
}
