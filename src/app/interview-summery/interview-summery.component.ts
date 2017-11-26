import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Upload } from "app/upload";
import { DbService } from "app/DbService/DbService";
import { UploadService } from "app/upload.service";
import { Applicant } from "app/ModelService/Applicant";
import { Skill } from "app/ModelService/Skill";
import { Manager } from "app/ModelService/Manager";
import { ApplicantRecruiter } from "app/ModelService/\u200F\u200FApplicantRecruiter";
import { Review } from "app/ModelService/Review";
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "app/AuthService/Auth.Service";

@Component({
  selector: 'app-interview-summery',
  templateUrl: './interview-summery.component.html',
  styleUrls: ['./interview-summery.component.css']
})
export class InterviewSummeryComponent implements OnInit {
  lock: boolean;
  review: Review = new Review();

  constructor(private Service: DbService, private router: Router, private route: ActivatedRoute, public AuthService: AuthService) {

  }

  @Input() ApplicantToUpdate: Applicant;
  @Output() Appearance = new EventEmitter<string>();
  AppRecruiter: ApplicantRecruiter[] = [];

  Skills: Skill[];
  Recruiters: Manager[];
  ngOnInit() {
    console.log("Applicant To Update", this.ApplicantToUpdate)
  }

  CloseForm() {
    this.Appearance.emit("");
  }

  Lock() {
    this.lock = !this.lock;
    if (this.lock) {
    }
  }
  PostApplicant(id:number) {
    this.review.ApplicantId=id;
    console.log(this.review);
    const req = this.Service.post("Review", this.review);
    req.map(res => <any>res.json()).
        subscribe(res => {
            console.log("Post Applicant Review Succesfully");
},
        (err: any) => {
            console.log("error : " + err);

            console.log(err.json());

        });

}
}
