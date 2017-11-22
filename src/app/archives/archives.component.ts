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
    hideHeader: false,
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: {
        confirmSave: true
      },
      custom: [
        {
          name: 'view',
          title: 'Edit ',
        },
      ]

    },
    pager: {
      display: true,
      perPage: 4,
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
    hideHeader: false,
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: {
        confirmSave: true
      },
      custom: [
        {
          name: 'view',
          title: 'Sava Changes',
          confirmSave: true
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
  ///////////////////////////////////////////////////////////////////////
  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json().filter(x => x.Active)
      console.log(this.AllApplicants);
    });
  }
  GetJobs() {
    this.Skills = [];
    let req = this.Service.Get("Jobs")
    req.subscribe(rsp => {
      this.Jobs = rsp.json().filter(x => x.Published)
      console.log(this.Jobs);
    });
  }
}