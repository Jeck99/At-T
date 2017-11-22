import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operator/retry';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventEmitter } from 'selenium-webdriver';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService implements OnInit {

  constructor( private http: Http) { }
  Filter ="";

  ngOnInit()
  {
    console.log(this.Filter);
  }
   
      private dataObs$ = new Subject();
  
      getData() {
          return this.dataObs$;
      }
  
      updateData(data: string) {
          this.dataObs$.next(data);
          console.log("Update Data",data);
      }
  

}
