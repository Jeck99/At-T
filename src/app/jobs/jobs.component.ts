import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DbService } from "app/DbService/DbService";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:[DbService]
})
export class JobsComponent{

  arItems: any[];


  //   ngOnInit() {
  // }

  // clickHandlerGet() {
  //   let req = this.http.get("http://localhost:51210/api/jobs");
  //   req.subscribe(rsp => {
  //     this.Jobs = rsp.json();
  //     for(let i = 0;i<this.Jobs.length;i++)
  //     {
       
  //      this.Skills = this.Jobs[i].Skillset.split(',')
  //     }
  //   });
  // }


}

