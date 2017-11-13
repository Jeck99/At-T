import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Job } from "../ModelService/Job";
import { Applicant } from "../ModelService/Applicant";
import { ApplicantSkillset } from "../ModelService/‏‏ApplicantSkillset";


import { DbService } from "../DbService/DbService";
import { Manager } from "../ModelService/Manager";
import { Skill } from "../ModelService/Skill";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { ApplicantRecruiter } from '../ModelService/\u200F\u200FApplicantRecruiter';
@Component({
  selector: 'app-update-applicants',
  templateUrl: './update-applicants.component.html',
  styleUrls: ['./update-applicants.component.css']
})
export class UpdateApplicantsComponent implements OnInit {

  constructor(private Service: DbService) { }

  ngOnInit() {

        this.GetSkills();
    this.GetRecruiters();
  }
  

  @Input() ApplicantToUpdate:Applicant;
  @Output() Appearance = new EventEmitter<boolean>();
  
  Skills: Skill[];
  Recruiters: Manager[];

  GetSkills() {
    let req = this.Service.Get("JobSkillsets")
    req.subscribe(rsp => {
      this.Skills = rsp.json();
      console.log(this.Skills);

    });
  }

  GetRecruiters() {
    let req = this.Service.Get("Managers")
    req.subscribe(rsp => {
      this.Recruiters = rsp.json();
      console.log(this.Recruiters);
    });
  }

  

  AppRecruiter: ApplicantRecruiter[] = [];
  
    PostApplicantRecruiters() {
      this.ApplicantToUpdate.Recruiters.forEach(element => {
        this.AppRecruiter.push(new ApplicantRecruiter(this.ApplicantToUpdate.Id, element.Id));
      });
      const req = this.Service.EditCollection("ApplicantRecruiters", this.AppRecruiter, this.ApplicantToUpdate.Id);
      req.subscribe(res => {
        console.log("Job Recruiter Id's Edit Succesfully");
        console.log(res);
        this.AppRecruiter =[];
        this.Appearance.emit(false);
        
      },
        (err: any) => {
          console.log("error in Recruiter Id's Edit : " + err);
          console.log(err.json());
          this.AppRecruiter =[];
          
        });
    }

  SkillSet: ApplicantSkillset [] = [];
  ApplicantSkillPost() {

    this.ApplicantToUpdate.Skills.forEach(element => {
      this.SkillSet.push(new ApplicantSkillset(this.ApplicantToUpdate.Id, element.Id));
    });
    
    console.log(this.SkillSet);
    const req = this.Service.EditCollection("ApplicantSkillsets", this.SkillSet, this.ApplicantToUpdate.Id);

    req.subscribe(res => {
      console.log("applicant SkillSet Edit Succesfully");
      console.log(res);
      this.SkillSet = [];
    },
      (err: any) => {
        console.log("error in skillset Edit : " + err);
        console.log(err.json());
        this.SkillSet = [];    
      });
  }


  PostApplicantToUpdate() {
    console.log(this.ApplicantToUpdate);

    let req = this.Service.Edit("Applicants", this.ApplicantToUpdate);
    req.subscribe(res => {
      console.log("My Update Job Action");
      this.ApplicantSkillPost(); 
      this.PostApplicantRecruiters();
    }, (err) => {
        console.log("Editing Problem");
      });
    
  }

  CheckSkill(skil: Skill) {
    if (this.ApplicantToUpdate.Skills.find(Jskil => Jskil.Id == skil.Id))
      return true;
    else
      return false;
  }

  CheckRecruiter(Manager: Manager) {
    if (this.ApplicantToUpdate.Recruiters.find(Jrec => Jrec.Id == Manager.Id))
    return true;
    else
    return false;
  }



   AddRecruiter(recruiter : Manager)
  {
    if(this.ApplicantToUpdate.Recruiters.find(rec => rec.Id == recruiter.Id))
      {
      let RecruiterIndex = this.ApplicantToUpdate.Recruiters.findIndex(rec => rec.Id == recruiter.Id)
      this.ApplicantToUpdate.Recruiters.splice(RecruiterIndex,1);
      }
    else
      {
               this.ApplicantToUpdate.Recruiters.push(recruiter);
      } 
            console.log(this.ApplicantToUpdate.Recruiters);
     }

  AddSkill(Skil : Skill)
  {
    if(this.ApplicantToUpdate.Skills.find(Sk => Sk.Id == Skil.Id))
      {
        let SkilIndex =  this.ApplicantToUpdate.Skills.findIndex(Sk => Sk.Id ==Skil.Id);
        this.ApplicantToUpdate.Skills.splice(SkilIndex,1);
      }
    else
      {     
            this.ApplicantToUpdate.Skills.push(Skil);
      }
      console.log(this.ApplicantToUpdate.Skills);
  }


}
