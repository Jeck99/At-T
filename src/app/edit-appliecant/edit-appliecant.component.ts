import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import {Appliecants} from "../Models/Applicant"
@Component({
  selector: 'app-edit-appliecant',
  templateUrl: './edit-appliecant.component.html',
  styleUrls: ['./edit-appliecant.component.css']
})
export class EditAppliecantComponent implements OnInit {
  @Input() appliecantsToEdit: Appliecants = <Appliecants>{};
  @Output() onClickEdit = new EventEmitter<Appliecants>();
 appliecantsEdit: Appliecants = <Appliecants>{};
  
  constructor() { 
    this.appliecantsToEdit=this.appliecantsEdit;
  }
  onSubmit(param: any) {
    console.log(param);
    this.onClickEdit.emit(this.appliecantsEdit);
  }
  ngOnInit() {}

}
