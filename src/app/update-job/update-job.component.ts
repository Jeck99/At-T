import { Component, OnInit, Input } from '@angular/core';
import { Job } from "../ModelService/Job";
import { DbService } from "../DbService/DbService";
import { Manager } from "../ModelService/Manager";
import { Skill } from "../ModelService/Skill";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  constructor(private Service: DbService) { }

  ngOnInit() {
    this.GetSkills();
    this.GetRecruiters();
  }


  @Input() JobToUpdate: Job;


  SkillSet: JobSkillset[] = [];
  SkillPost() {

    this.JobToUpdate.Skills.forEach(element => {

      this.SkillSet.push(new JobSkillset(this.JobToUpdate.Id, element.Id));

    });
    console.log(this.SkillSet);
    const req = this.Service.EditCollection("jobSkillsets", this.SkillSet, this.JobToUpdate.Id);

    req.subscribe(res => {
      console.log("Job SkillSet Edit Succesfully");
      console.log(res);
    },
      (err: any) => {
        console.log("error in skillset Edit : " + err);
        console.log(err.json());
      });
  }


  JobRecruiter: JobRecruiter[] = [];

  SkillRecruiterId(jobId: number) {
    this.JobToUpdate.Recruiters.forEach(element => {
      this.JobRecruiter.push(new JobRecruiter(jobId, element.Id));
    });
    const req = this.Service.EditCollection("JobRecruiters", this.JobRecruiter, this.JobToUpdate.Id);
    req.subscribe(res => {
      console.log("Job Recruiter Id's Edit Succesfully");
      console.log(res);
    },
      (err: any) => {
        console.log("error in Recruiter Id's Edit : " + err);
        console.log(err.json());
      });
  }








  PostJobToUpdate() {
    console.log(this.JobToUpdate);

    let req = this.Service.Edit("Jobs", this.JobToUpdate);
    req.subscribe(res => {
      console.log("My Update Job Action");
      this.SkillPost(); 
    }, (err) => {
        console.log("Editing Problem");
      });
    
  }








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


  CheckSkill(skil: Skill) {
    if (this.JobToUpdate.Skills.find(Jskil => Jskil.Id == skil.Id))
      return true;
    else
      return false;
  }

  CheckRecruiter(Manager: Manager) {
    if (this.JobToUpdate.Recruiters.find(Jrec => Jrec.Id == Manager.Id))
    return true;
    else
    return false;
  }



   AddRecruiter(recruiter : Manager)
  {
    if(this.JobToUpdate.Recruiters.find(rec => rec.Id == recruiter.Id))
      {
      let RecruiterIndex = this.JobToUpdate.Recruiters.findIndex(rec => rec.Id == recruiter.Id)
      this.JobToUpdate.Recruiters.splice(RecruiterIndex,1);
      }
    else
      {
               this.JobToUpdate.Recruiters.push(recruiter);
      } 
            console.log(this.JobToUpdate.Recruiters);
     }

  AddSkill(Skil : Skill)
  {
    if(this.JobToUpdate.Skills.find(Sk => Sk.Id == Skil.Id))
      {
        let SkilIndex =  this.JobToUpdate.Skills.findIndex(Sk => Sk.Id ==Skil.Id);
        this.JobToUpdate.Skills.splice(SkilIndex,1);
      }
    else
      {     
            this.JobToUpdate.Skills.push(Skil);
      }
      console.log(this.JobToUpdate.Skills);
  }




}
