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
import { MailBuild } from "../ModelService/MailBuild";
@Component({
  selector: 'applicant-details',
  templateUrl: './ApplicantDetails.component.html',
  styleUrls: ['./ApplicantDetails.component.css']
})
export class ApplicantDetailsComponent implements OnInit {

  constructor(private Service: DbService,private router: Router, private route: ActivatedRoute ,public AuthService : AuthService) {
   }
  
  review : Review= new Review();
  summaryMode : boolean =false;


  LockApplicant()
  {
     this.review.ManagerId = Number(localStorage.getItem('uid'));
     this.review.ApplicantId = this.ChosenApplicant.Id;
      console.log(this.review);

     let req = this.Service.post("Reviews",this.review);
     req.map(res => <any>res.json()).
            subscribe(res => {
<<<<<<< HEAD
                this.ApplicantDetailsAppearance.emit(true);                       
=======
                console.log("Lock successed");  
                this.MailingRecruiters();
                 this.ApplicantDetailsAppearance.emit(true);                       
>>>>>>> 0bce0f5dfd43e004bbc88ea6f8181f678fe272cb
                },
            (err : any) => {            
            });
  }
  UserOn : string = "";
  ngOnInit()
  {
     this.UserOn = localStorage.getItem("un");

  }

  @Input() ChosenApplicant : Applicant;
  @Output() ApplicantDetailsAppearance = new EventEmitter<boolean>();

closeCard()
{
    this.ApplicantDetailsAppearance.emit(false);   
}


ApplicantToView: Applicant = new Applicant("", "", 0, "", "");




     MailingRecruiters()
   {
       this.PrepareMassage()
       const req = this.Service.post("MailService", this.Mail);
        req.subscribe(res => {
            console.log( "Mail Success",res); },
            (err: any) => {
            console.log( "Mail Error",err);
            });
   }

   Mail : MailBuild = new MailBuild();


   PrepareMassage()
   {
    this.Mail.To = this.ChosenApplicant.Email;
    this.Mail.Subject = "Interview Invite - At&t";
    this.Mail.Body = "Hi "+this.ApplicantToView.Name + " You Invited To an Interview In Our Company ";
   }



}