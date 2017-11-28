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
<<<<<<< HEAD
=======

>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
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
    event.data.Active = true;
    this.AllApplicants.Active = event.data.Active;
    let req = this.Service.Edit("Applicants", event.data)
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
    });
  }
  
  onCustomJob(event) {
<<<<<<< HEAD
    this.Jobs.Published = event.data.Published;
    let req = this.Service.Edit("Jobs", event.data)
    req.subscribe(rsp => {
      this.Jobs = rsp.json();
    });
  this.ngOnInit();
  }

=======
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
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
<<<<<<< HEAD
      this.AllApplicants = rsp.json();
=======
      this.AllApplicants = rsp.json().filter(App => App.Active == false);
      console.log("Not Active",this.AllApplicants);
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
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
<<<<<<< HEAD
      this.Jobs = rsp.json();
=======
      this.Jobs = rsp.json().filter(job => job.Published == false);
      console.log(this.Jobs);
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
    });
  }
}
