import { Component, OnInit, Injectable } from '@angular/core';
declare var $: any;
// @Component({
//   selector: 'app-notifications',
//   templateUrl: './notifications.component.html',
//   styleUrls: ['./notifications.component.css']
// })
Injectable()
export class NotificationsService implements OnInit {

  constructor() { }
  showNotification(from, align , messagecontent , messagetype ){
      const type = ['','info','success','warning','danger'];

console.log("Fuck");
      $.notify({
          icon: "notifications",
          message: messagecontent

      },{
          type: type[messagetype],
          timer: 2500,
          placement: {
              from: from,
              align: align
          }
      });
  }
  ngOnInit() {
  }

}
