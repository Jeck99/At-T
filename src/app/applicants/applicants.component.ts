import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
providers: [DbService],
})
export class ApplicantsComponent{

  constructor(private Service: DbService) {this.GetApplicants();
  }
  AllApplicants: any[];
  lock:boolean= false;
  AddApplicant=true;  

  GetApplicants(){
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();
      console.log(this.AllApplicants);
    });
  }

  
  Lock(){
    this.lock=!this.lock;
    if(this.lock)
    {
    }
  }

  // AddApplicantForm()
  // {
  //  this.AddApplicant=!this.AddApplicant;
  // }
}
