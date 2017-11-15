import { Injectable } from "@angular/core";
import { DbService } from "../DbService/DbService";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {

    constructor(private Service : DbService,  private router: Router,) {
        this.AuthState();
    }

    IsLogged = false;
    Role = false;
    
    AuthState() {

        if (localStorage.getItem('Session'))
        {
          this.IsLogged = true;
        }   
        else{
          this.IsLogged = false;         
        }
       }

     RoleCheck() {
    const req = this.Service.GetUserState('ManagerLogins');
     req.map(res => <any>res.json()).
      subscribe(res => {
        console.log("Is Manager Loged ?");
        console.log(res);
        this.Role =  res;  },
      (err: any) => {
        console.log("Error !");
        console.log(err.json());
        this.Role = false;
      });
  }

   LogOff() {
     debugger;
      let SessionToServer = localStorage.getItem('Session');
      const Req = this.Service.LogOut("ManagerLogins", SessionToServer);
      Req.subscribe(res => {
        window.location.reload();        
          console.log("Finally !!!!!");
          localStorage.removeItem('Session');
          localStorage.removeItem('expires_at');        
          localStorage.removeItem('ue');           
           localStorage.removeItem('un');
          localStorage.removeItem('uid');  
          console.log("Supposed to be loged out"); 
          
          this.RoleCheck();
          this.router.navigate(['./login']); 
          
        },
        (err: any) => {
          console.log(" Error - in deleting Cokies  ");
        });
    }
}





