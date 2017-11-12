import { Component, OnInit } from '@angular/core';
import { DbService } from "../DbService/DbService";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { Job } from "../ModelService/Job";
import { Skill } from "../ModelService/Skill";
import { Manager } from "../ModelService/Manager";

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
  providers : [DbService]
})
export class JobPostComponent implements OnInit {

  constructor(private Service : DbService) { }

  ngOnInit() {
console.log("Start job post component");
this.GetSkills();
this.GetRecruiters()
  }


SkillSet : JobSkillset[] = [];
JobRecruiter : JobRecruiter [] = [];

saving : boolean = false;

 NewJob : Job = new Job ("","","");


 PostNewJob() {   
   console.log(this.NewJob);  
   this.saving = true;
            let req = this.Service.post("Jobs",this.NewJob);
            req.map(res => <any>res.json()).
            subscribe(res => {
                console.log("Post Job Succesfully");
                if(this.NewJob.Skills!=[])
                this.SkillPost(res);
                if(this.NewJob.Recruiters!=[])
                this.SkillRecruiterId(res);
                   this.saving = false;

                },
            (err : any) => {
            console.log("error : " + err);

            console.log(err.json());

            });
           
    }



SkillPost( jobId : number)
{

   this.NewJob.Skills.forEach(element => {
     
this.SkillSet.push(new JobSkillset( jobId , element.Id));

   });
           const req = this.Service.post("jobSkillsets",this.SkillSet);
            
            req.subscribe(res => {
                console.log("Job SkillSet Added Succesfully");
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
   this.NewJob.Recruiters.forEach(element => {
     
this.JobRecruiter.push(new JobRecruiter( jobId , element.Id));

   });
           const req = this.Service.post("JobRecruiters",this.JobRecruiter);
                req.subscribe(res => {
                console.log("Job Recruiter Id's Added Succesfully");
                console.log(res);
                },
            (err : any) =>
             {
            console.log("error in Recruiter Id's Post : " + err);
            console.log(err.json());
            });
}

Skills : Skill [];
Recruiters : Manager [];
  GetSkills(){
    let req = this.Service.Get("JobSkillsets")
    req.subscribe(rsp => {
      this.Skills = rsp.json();
      console.log(this.Skills);

    });
  }

    GetRecruiters(){
    let req = this.Service.Get("Managers")
    req.subscribe(rsp => {
      this.Recruiters = rsp.json();
      console.log(this.Recruiters);

    });
  }


  AddRecruiter(recruiter : Manager)
  {
    if(this.NewJob.Recruiters.indexOf(recruiter)==-1)
      {
       this.NewJob.Recruiters.push(recruiter);
       console.log(this.NewJob.Recruiters);
      }

    else
      {
        let RecruiterIndex = this.NewJob.Recruiters.indexOf(recruiter)
        this.NewJob.Recruiters.splice(RecruiterIndex,1);
        console.log(this.NewJob.Recruiters);     
      } 
     }

  AddSkill(Skil : Skill)
  {
    if(this.NewJob.Skills.indexOf(Skil)==-1)
      {
    this.NewJob.Skills.push(Skil);
      }

    else
      {
        let SkilIndex = this.NewJob.Skills.indexOf(Skil)
        this.NewJob.Skills.splice(SkilIndex,1);
      }
      console.log(this.NewJob.Skills);
  }

}
