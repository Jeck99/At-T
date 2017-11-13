import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import {Applicant} from "../ModelService/Applicant"
@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css']
})
export class EditAppliecantComponent implements OnInit {

  @Input() appliecantsToEdit: Applicant = <Applicant>{};
  @Output() onClickEdit = new EventEmitter<Applicant>();
 ApplicantEdit: Applicant = <Applicant>{};
  
  constructor() { 
    this.appliecantsToEdit=this.ApplicantEdit;
  }
  onSubmit(param: any) {
    console.log(param);
    this.onClickEdit.emit(this.ApplicantEdit);
  }
  ngOnInit() {}

}
