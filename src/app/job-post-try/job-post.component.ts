import { Component, OnInit } from '@angular/core';
import { Job } from "app/ModelService/Job";
import { DbService } from "app/DbService/DbService";
import { JobSkillset } from "app/ModelService/JobSkillset";
import { JobRecruiter } from "app/ModelService/JobRecruiter";

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
  }

Recruiuter : number [] = [3];
SkillsetId : number [] = [1,2,3];
SkillSet : JobSkillset[] = [];
JobRecruiter : JobRecruiter [] = [];



job : Job = new Job (5, "Angular Expert","Good Job","Fronted Developer");


 PostJob() {     
        // debugger;
            const req = this.Service.post("Jobs",this.job);
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
     
this.SkillSet.push(new JobSkillset( jobId , element));

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
   this.Recruiuter.forEach(element => {
     
this.JobRecruiter.push(new JobRecruiter( jobId , element));

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
