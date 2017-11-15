import { Component, OnInit } from '@angular/core';
import { DbService } from "../DbService/DbService";
import { JobSkillset } from "../ModelService/JobSkillset";
import { JobRecruiter } from "../ModelService/JobRecruiter";
import { Job } from "../ModelService/Job";
import { ApplicantRecruiter } from "../ModelService/\u200F\u200FApplicantRecruiter";
import { ApplicantSkillset } from "../ModelService/\u200F\u200FApplicantSkillset";
import { Applicant } from "../ModelService/Applicant";
import { Skill } from '../ModelService/Skill';
import { Manager } from '../ModelService/Manager';

@Component({
    selector: 'add-applicant',
    templateUrl: './add-applicant.component.html',
    styleUrls: ['./add-applicant.component.css'],
    providers: [DbService]
})
export class AddApplicantComponent implements OnInit {

    constructor(private Service: DbService) { }

    ngOnInit() {
        console.log("Start Applicant post component");
        this.GetSkills();
        this.GetRecruiters();
    }

    Recruiuter: number[];
    SkillsetId: number[];
    SkillSet: ApplicantSkillset[] = [];
    JobRecruiter: ApplicantRecruiter[] = [];

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


    Applicant: Applicant = new Applicant("", "", 5, "", "");


    PostApplicant() {
        this.Applicant.LockedBy = "Almog";
        console.log(this.Applicant);
        const req = this.Service.post("Applicants", this.Applicant);
        req.map(res => <any>res.json()).
            subscribe(res => {
                console.log("Post Job Succesfully");
                this.SkillPost(res);
                this.SkillRecruiterId(res);},
            (err: any) => {
                console.log("error : " + err);

                console.log(err.json());

            });

    }



    SkillPost(appId: number) {
        this.Applicant.Skills.forEach(element => {
            this.SkillSet.push(new ApplicantSkillset(appId, element.Id));
        });
        const req = this.Service.post("ApplicantSkillsets", this.SkillSet);

        req.subscribe(res => {
            console.log("applicant SkillSet Added Succesfully     ApplicantSkillsets Controller");
            console.log(res);
        },
            (err: any) => {
                console.log("error in skillset Post : " + err);
                console.log(err.json());
            });
    }



    SkillRecruiterId(jobId: number) {
        this.Applicant.Recruiters.forEach(rec => {

            this.JobRecruiter.push(new ApplicantRecruiter(jobId, rec.Id));

        });
        const req = this.Service.post("ApplicantRecruiters", this.JobRecruiter);
        req.subscribe(res => {
            console.log("Job Recruiter Id's Added Succesfully  ApplicantRecruiters Controller");
            console.log(res);
        },
            (err: any) => {
                console.log("error in Recruiter Id's Post : " + err);
                console.log(err.json());
            });
    }



    AddRecruiter(recruiter: Manager) {
        if (this.Applicant.Recruiters.indexOf(recruiter) == -1) {
            this.Applicant.Recruiters.push(recruiter);
            console.log(this.Applicant.Recruiters);
        }
        else {
            let RecruiterIndex = this.Applicant.Recruiters.indexOf(recruiter)
            this.Applicant.Recruiters.splice(RecruiterIndex, 1);
            console.log(this.Applicant.Recruiters);
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
        console.log(this.Applicant.Skills);
    }



}
