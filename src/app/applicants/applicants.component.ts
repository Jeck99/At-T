import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import { Applicant } from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "../AuthService/Auth.Service";

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
  providers: [DbService],
})
export class ApplicantsComponent implements OnInit {
  page: number = 1;

  ngOnInit() {
    this.GetApplicants();
  }

  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  AllApplicants: any[];
  lock: boolean = false;
  AddApplicant = false;
  EditMode: boolean = false;
  ApplicantDetailsMode: boolean = false;
  ApplicantToView: Applicant = new Applicant("", "", 0, "", "");

  ViewUserDetails(Applicant: Applicant) {
    this.ApplicantToView = Applicant;
    this.ApplicantDetailsMode = true;
  }

  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json().sort((applicant1, applicant2) => {
        if (applicant1.MatchPrecentage < applicant2.MatchPrecentage) {
          return 1;
        }

        if (applicant1.MatchPrecentage > applicant2.MatchPrecentage
        ) {
          return -1;
        }

        return 0;
      });
      console.log("Applicants : ", this.AllApplicants);
    });
  }
  OnAppearance(CloseForm: string) {
    this.EditMode = false;
    if (CloseForm == 'success')
      this.Notify.showNotification('top', 'right', 'Aplicant Update Succesfully', 2);
  }

  OnAppearanceDetails(CloseForm: boolean) {
    this.ApplicantDetailsMode = CloseForm;
    //  If Interview we Set Up interview
    //    this.Notify.showNotification('top','right','Set Interview Succesfully', 2);    
  }

  Lock() {
    this.lock = !this.lock;
    if (this.lock) {
    }
  }
  ApplicantToEdit: Applicant = new Applicant("", "", 0, "", "");

  PrepareForEdit(Applicant: Applicant) {
    this.EditMode = true;
    this.ApplicantToEdit = Applicant;
  }

  DeleteApplicant(id: number) {
    // Should Be Update
  }

  AddApplicantForm() {
    this.AddApplicant = !this.AddApplicant;
    this.EditMode = !this.EditMode;
  }

  PrecetageHandle(MatchePrecentage : number)
  {
      return Math.floor(MatchePrecentage*100);
  }
}
