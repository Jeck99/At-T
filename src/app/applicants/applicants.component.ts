import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import {Applicant} from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "app/AuthService/Auth.Service";
import {SearchFilterPipe} from '../SearchPipe/SearchPipe';
import { Pipe } from '@angular/core/src/metadata/directives';
import {SkillPipe} from '../skill.pipe';
import { Skill } from 'app/ModelService/Skill';
import { SearchService } from 'app/search.service';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
providers: [DbService,SearchService],

})
export class ApplicantsComponent implements OnInit {
  page: number = 1;
  
  constructor(private Service: DbService , private Notify : NotificationsService, public AuthService : AuthService,private SearchFilter : SearchService) { }
  AllApplicants: Applicant[];
  lock:boolean= false;
  AddApplicant=false;
  EditMode : boolean = false;
  Filter  : any;
  skillfilter : Skill[] = [];  

  ngOnInit() {
    this.GetApplicants();


  }
  
  changenow()
  {
    this.SearchFilter.getData().subscribe(data => {
      this.Filter = data;
    })
  
  }

  GetApplicants(){
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
      this.skillfilter = this.AllApplicants[0].Skills;
      console.log("Haim" , this.AllApplicants[0]);
      
      console.log("filter Skills" ,this.skillfilter);
      

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
