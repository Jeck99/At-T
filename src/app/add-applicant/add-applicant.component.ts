import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { DbService } from "../DbService/DbService";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { Job } from "../ModelService/Job";
import { ApplicantRecruiter } from "../ModelService/\u200F\u200FApplicantRecruiter";
import { ApplicantSkillset } from "../ModelService/\u200F\u200FApplicantSkillset";
import { Applicant } from "../ModelService/Applicant";
import { Skill } from '../ModelService/Skill';
import { Manager } from '../ModelService/Manager';
import { UploadService } from '../upload.service';
import { Upload } from '../Upload';
import * as _ from "lodash";

@Component({
    selector: 'add-applicant',
    templateUrl: './add-applicant.component.html',
    styleUrls: ['./add-applicant.component.css'],
    providers: [DbService,UploadService]
})
export class AddApplicantComponent implements OnInit {

    constructor(private Service: DbService,private upSvc:UploadService) { }

    ngOnInit() {
        console.log("Start Applicant post component");
        this.GetSkills();
        this.GetRecruiters();
    }





  @Output() Appearance = new EventEmitter<string>();

    currentUpload: Upload;
    dropzoneActive:boolean = false;
    Recruiuter: number[];
    SkillsetId: number[];
    SkillSet: ApplicantSkillset[] = [];
    JobRecruiter: ApplicantRecruiter[] = [];

    Skills: Skill[];
    Recruiters: Manager[];

    dropzoneState($event: boolean) {
        this.dropzoneActive = $event;
      }
      handleDrop(fileList: FileList) {
        let filesIndex = _.range(fileList.length)
        _.each(filesIndex, (idx) => {
          console.log("idx",idx);
          this.currentUpload = new Upload(fileList[idx]);
          console.log("currentUpload",this.currentUpload);
         
         this.upSvc.pushUpload(this.currentUpload);
      }   
        )
      }

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


    Applicant: Applicant = new Applicant("", "", 0, "", "");


    PostApplicant() {
        this.Applicant.Url = localStorage.getItem('DURL');   
        this.Applicant.LockedBy = "Almog";
        console.log(this.Applicant);
        const req = this.Service.post("Applicants", this.Applicant);
        req.map(res => <any>res.json()).
            subscribe(res => {
                console.log("Post Applicant Succesfully");
                this.SkillPost(res);
                this.SkillRecruiterId(res);
            this.Appearance.emit("success");
            },
            (err: any) => {
                console.log("error : " + err);
            });

    }



    SkillPost(appId: number) {
        this.Applicant.Skills.forEach(element => {
            this.SkillSet.push(new ApplicantSkillset(appId, element.Id));
        });
        const req = this.Service.post("ApplicantSkillsets", this.SkillSet);
        req.subscribe(res => {
            console.log("applicant SkillSet Added Succesfully  ApplicantSkillsets Controller");
        },
            (err: any) => {
                console.log("error in skillset Post : " + err);
            });
    }



    SkillRecruiterId(jobId: number) {
        this.Applicant.Recruiters.forEach(rec => {

            this.JobRecruiter.push(new ApplicantRecruiter(jobId, rec.Id));

        });
        const req = this.Service.post("ApplicantRecruiters", this.JobRecruiter);
        req.subscribe(res => {
            console.log("Job Recruiter Id's Added Succesfully  ApplicantRecruiters Controller");
        },
            (err: any) => {
                console.log("error in Recruiter Id's Post : " + err);
            });
    }


     // <a href="mailto:someone@example.com?
  // cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&
  // subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!" 
  // target="_top">Send mail!</a>

   mail = "mailto:"



    AddRecruiter(recruiter: Manager) {
        if (this.Applicant.Recruiters.indexOf(recruiter) == -1) {
            this.Applicant.Recruiters.push(recruiter);
            // console.log(this.Applicant.Recruiters);
            // this.mail+= "cc="+recruiter.Email+"&";
            // console.log(this.mail);
        }
        else {
            let RecruiterIndex = this.Applicant.Recruiters.indexOf(recruiter)
            this.Applicant.Recruiters.splice(RecruiterIndex, 1);
            this.mail.replace("cc="+recruiter.Email+"&",'');
        }
    }

    AddSkill(Skil: Skill) {
        if (this.Applicant.Skills.indexOf(Skil) == -1) {
            this.Applicant.Skills.push(Skil);
        }

        else {
            let SkilIndex = this.Applicant.Skills.indexOf(Skil)
            this.Applicant.Skills.splice(SkilIndex, 1);
        }
    }


    CloseForm()
    {
        this.Appearance.emit("");
    }



}
