import { Component, OnInit } from '@angular/core';
import { DbService } from "app/DbService/DbService";
import { Router } from "@angular/router";
import { AuthService } from "app/AuthService/Auth.Service";
import { Manager } from '../ModelService/Manager';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  p: number = 1;
Recruiters: Manager[];
  
  constructor(private Service: DbService , private router : Router, public AuthService : AuthService) { }
  ngOnInit() {
    let req = this.Service.Get("Managers")
    req.subscribe(rsp => {
        this.Recruiters = rsp.json();
        console.log(this.Recruiters);
    });
}
settings = {
  mode: 'inline', // inline|external|click-to-edit
  selectMode: 'single', // single|multi
  hideHeader: false,
  hideSubHeader: true,
  actions: {
    edit:false,
    delete:false,
    add:false
  },
  pager: {
    display: true,
    perPage: 3,
  },
  columns: {
    // Id: {
    //   title: 'ID',
    // },
    UserName: {
      title: 'Name',
      filter: true
    },
    Email: {
      title: 'Email',
      filter: true
    },
  }
};
}
