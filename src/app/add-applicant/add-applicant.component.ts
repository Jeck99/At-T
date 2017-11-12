import { Component, OnInit } from '@angular/core';
import { DbService } from "../DbService/DbService";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { Job } from "../ModelService/Job";
import { ApplicantRecruiter } from "../ModelService/\u200F\u200FApplicantRecruiter";
import { ApplicantSkillset } from "../ModelService/\u200F\u200FApplicantSkillset";
import { Applicant } from "../ModelService/Applicant";

@Component({
  selector: 'add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css'],
  providers : [DbService]
})
export class AddApplicantComponent implements OnInit {

  constructor(private Service : DbService) { }

  ngOnInit() {
   console.log("Start Applicant post component");
  }

Recruiuter : number [] = [3];
SkillsetId : number [] = [1,2,3];
SkillSet : ApplicantSkillset[] = [];
JobRecruiter : ApplicantRecruiter [] = [];



 Applicant : Applicant = new Applicant("Yossi@gmail.com","Big Data Expert",5,"Yossi","056295626");


 PostApplicant() {     
   this.Applicant.LockedBy = "Almog";
console.log(this.Applicant);

  const req = this.Service.post("Applicants",this.Applicant);
            req.map(res => <any>res.json()).
            subscribe(res => {
                console.log("Post Job Succesfully");
                this.SkillPost(res);
                this.SkillRecruiterId(res);
                },
            (err : any) => {
            console.log("error : " + err);

            console.log(err.json());

            });
           
    }



SkillPost( jobId : number)
{

   this.SkillsetId.forEach(element => {
     
this.SkillSet.push(new ApplicantSkillset( jobId , element));

   });
           const req = this.Service.post("jobSkillsets",this.SkillSet);
            
            req.subscribe(res => {
                console.log("Job SkillSet Added Succesfully     jobSkillsets Controller"   );
                console.log(res);
                },
            (err : any) =>
             {
            console.log("error in skillset Post : " + err);
            console.log(err.json());
            });
}



SkillRecruiterId( jobId : number)
{
   this.Recruiuter.forEach(RecId => {
     
this.JobRecruiter.push(new ApplicantRecruiter( jobId , RecId));

   });
           const req = this.Service.post("ApplicantRecruiters",this.JobRecruiter);
                req.subscribe(res => {
                console.log("Job Recruiter Id's Added Succesfully  ApplicantRecruiters Controller");
                console.log(res);
                },
            (err : any) =>
             {
            console.log("error in Recruiter Id's Post : " + err);
            console.log(err.json());
            });
}



  AddRecruiter(recId : number)
  {
    this.Recruiuter.push(recId);
  }

  //   AddSkill(skillId : number)
  // {
  //   this.Skillset.push(skillId);
  // }




  postRecruiter()
  {

  }

  postSkillset()
  {

  }

  GetSkills()
  {
    return [1,2,3];
  }

}
