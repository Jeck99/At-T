import { DbService } from './../DbService/DbService';
import { Component, OnInit, Input } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inter-view',
  templateUrl: './inter-view.component.html',
  styleUrls: ['./inter-view.component.css']
})
export class InterViewComponent implements OnInit {
  date: Date;
  time;
  fullDate = new Date();
  constructor( private Db : DbService) 
  {
     this.date = new Date();
  }

  ngOnInit() {
  }

  fun(){
    console.log(this.date);
    console.log(this.time);

    // this.fullDate.setTime(this.time);
    // this.fullDate.setDate(Number.parseFloat(this.date));
  }
}
