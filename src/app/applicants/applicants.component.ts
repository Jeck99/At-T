import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import {Applicant} from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "app/AuthService/Auth.Service";

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
providers: [DbService],
})
export class ApplicantsComponent implements OnInit {
  page: number = 1;
  
  ngOnInit() {
    this.GetApplicants();
      }

  constructor(private Service: DbService , private Notify : NotificationsService, public AuthService : AuthService) { }
  AllApplicants: any[];
  lock:boolean= false;
  AddApplicant=false;
  EditMode : boolean = false;
  
  GetApplicants(){
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
      console.log(this.AllApplicants);
    });
  }
  OnAppearance(CloseForm:string)
  {
    this.EditMode = false;
    if(CloseForm == 'success')
    this.Notify.showNotification('top','right','Aplicant Update Succesfully', 2);    
  }
  
  Lock(){
    this.lock=!this.lock;
    if(this.lock)
    {
    }
  }
  ApplicantToEdit : Applicant = new Applicant("","",0,"","");
  
  PrepareForEdit(Applicant : Applicant)
  {
      this.EditMode= true;
      this.ApplicantToEdit = Applicant;
  }

  DeleteApplicant(id:number)
  {
    console.log("x");
    let req = this.Service.delete("Applicants",id)
    req.subscribe(rsp => {
      alert("Deleted");
      this.ngOnInit();
    });
  }

  AddApplicantForm()
  {
    this.AddApplicant=!this.AddApplicant;
    this.EditMode= !this.EditMode;
  
   } 
}
