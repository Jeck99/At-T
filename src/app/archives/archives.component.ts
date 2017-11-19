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
    hideSubHeader: false,

    actions: {
      delete: false,
      add: false,
      edit: {
        confirmSave: true
      },
      custom: [
        {
          name: 'view',
          title: 'ReActive ',
        },
      ]

    },
    pager: {
      display: true,
      perPage: 3,
    },
    columns: {
      // Id: {
      //   title: 'ID',
      // },
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
    hideSubHeader: false,

    actions: {
      delete: false,
      add: false,
      edit: {
        confirmSave: true
      },
      custom: [
        {
          name: 'view',
          title: 'ReActive ',
        },
      ]

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
      Active: {
        title: 'Active',
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
    window.location.reload();
  }
  
  onCustomJob(event) {
    console.log("event.data:",event.data)
    event.data;
    this.Jobs = event.data;
    console.log("this.Jobs:",this.Jobs)
    let req = this.Service.Edit("Applicants", event.data)
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
    });
    window.location.reload();
  }

  onEdit(event) {
    console.log(event.data)
    this.Jobs = event.data;
    console.log(this.Jobs)
    let req = this.Service.Edit("Jobs", event.data)
    req.subscribe(rsp => {
      this.Jobs = rsp.json();
    });
window.location.reload();
  }
  ///////////////////////////////////////////////////////////////////////
  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
      console.log(this.AllApplicants);
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
      this.Jobs = rsp.json();
      console.log(this.Jobs);
    });
  }
}
