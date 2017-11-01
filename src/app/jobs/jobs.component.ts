import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private http: Http) { }

  arItems: any[];

  clickHandlerGet() {
    let req = this.http.get("http://localhost:51210/api/jobs");
    req.subscribe(rsp => {
      this.arItems = rsp.json();
      console.log(this.arItems); ``
    });
  }


}
