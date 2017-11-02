import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from ".././DbService/DbService";

@Component({
  selector: 'app-appliecants',
  templateUrl: './appliecants.component.html',
  styleUrls: ['./appliecants.component.css'],
providers: [DbService],
})
export class AppliecantsComponent{

  constructor(private http: Http,private Service: DbService) {this.GetApplicants(); }
  AllApplicants: any[];
  lock:boolean= false;
  AddApplicant=true;
  GetApplicants(){
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json();

    });
  }
  Lock(){
    this.lock=!this.lock;
    if(this.lock)
    {
    }
  }
  AddApplicantForm()
  {
   this.AddApplicant=!this.AddApplicant;
  }
}
