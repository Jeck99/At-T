import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Job } from "../ModelService/Job";
import { DbService } from "../DbService/DbService";
import { Manager } from "../ModelService/Manager";
import { Skill } from "../ModelService/Skill";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Applicant } from "../ModelService/Applicant";
import { AuthService } from "../AuthService/Auth.Service";
import { Review } from "../ModelService/Review";
@Component({
  selector: 'applicant-details',
  templateUrl: './ApplicantDetails.component.html',
  styleUrls: ['./ApplicantDetails.component.css']
})
export class ApplicantDetailsComponent implements OnInit {

  constructor(private Service: DbService,private router: Router, private route: ActivatedRoute ,public AuthService : AuthService) {
   }
  
  review : Review= new Review();

  LockApplicant()
  {
    this.review.ManagerId = Number(localStorage.getItem('uid'));
    this.review.ApplicantId = this.ChosenApplicant.Id;
    let req = this.Service.post("Reviews",this.review);
    req.map(res => <any>res.json()).
            subscribe(res => {
                console.log("Lock successed");  
                this.ApplicantDetailsAppearance.emit(true);                       
                },
            (err : any) => {            
            console.log("Lock Error" ,err.json());
            });
  }

  UserOn : string = "";
  ngOnInit()
  {
     this.UserOn = localStorage.getItem("un");
  }
Resume : boolean = false;

  @Input() ChosenApplicant : Applicant;
  @Output() ApplicantDetailsAppearance = new EventEmitter<boolean>();

closeCard()
{
    this.ApplicantDetailsAppearance.emit(false);   
}
summaryApplicant: Applicant = new Applicant("", "", 0, "", "");

resume()
{
this.Resume = !this.Resume;
}
summaryMode=false;

ApplicantToView: Applicant = new Applicant("", "", 0, "", "");

summary(Applicant: Applicant) {
    this.ApplicantToView = Applicant;
    this.review.ApplicantId = this.ApplicantToView.Id; 
    this.summaryMode = true;
  }
}