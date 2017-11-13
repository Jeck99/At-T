import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DbService } from "../DbService/DbService";
import { AuthService } from "../AuthService/Auth.Service";
// import { DbService } from "app/DbService/DbService";
// import { AuthService } from "app/AuthService/Auth.Service";

@Component({
    moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] , 
  providers : [DbService , AuthService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
    //   private authenticationService: AuthenticationService,
    //   private alertService: AlertService ,
      private Service : DbService
   ,   private AuthService : AuthService
      ) { }

  ngOnInit() {
    // reset login status
    //    this.authenticationService.logout();
    //   // get return url from route parameters or default to '/'
    //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



  
    Login() {     
        // debugger;
            const req = this.Service.login("ManagerLogins",this.model);
            req.map(res => <any>res.json()).
            subscribe(res => {
                console.log(res.SessionId);
                console.log(res);
                
                 localStorage.setItem('Session',res.SessionId );
                 localStorage.setItem('ue',res.ue );
                 localStorage.setItem('un',res.un );
                 localStorage.setItem('uid',res.uid );
                 const expiresAt = JSON.stringify(1000) + new Date().getTime();
                 localStorage.setItem('expires_at', expiresAt);
                 console.log("Succesfully Logged");
                 this.AuthService.RoleCheck();
                this.router.navigate(['./home']); 


                },
            (err : any) => {
            console.log("error : " + err);

            console.log(err.json());

            });
           
    }

}
