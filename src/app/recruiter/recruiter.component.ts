import { Component, OnInit } from '@angular/core';
import { DbService } from "app/DbService/DbService";
import { Router } from "@angular/router";
import { AuthService } from "app/AuthService/Auth.Service";

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  p: number = 1;
  
  constructor(private Service: DbService , private router : Router, public AuthService : AuthService) { }
  
  ngOnInit() {
  }

}
